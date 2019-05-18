import { UrlBuilder } from "./UrlBuilder";

const fetchImpl = (window as any).fetch; // console advice

export class FetcherError {
  public response: Response;
  public innerError: any;
  public message: string;

  constructor(message: string, response: Response, innerError?: any) {
    this.message = message;
    this.response = response;
    this.innerError = innerError;
  }
}

export namespace Fetcher {
  let baseUrl = "";
  let errorHandler: (e: FetcherError) => void;

  export function setBaseUrl(url: string) {
    baseUrl = url;
  }

  export function getBaseUrl(): string {
    return baseUrl;
  }

  export function setErrorHandler(handler: (e: FetcherError) => void) {
    errorHandler = handler;
  }

  function patchRequestInit(init?: RequestInit): RequestInit {
    init = init || {};
    init.credentials = "include"; // NOTE: for cookies
    return init;
  }

  function patchHeaders(headers: any): any {
    return headers;
  }

  function checkResponseStatus(response: Response): Response {
    if (response.status === 500) {
      response.json && response.json().then(e => getOrCreateError(e));
      return null;
    }

    if (response.status < 200 || response.status >= 300) {
      throw new FetcherError(response.statusText, response);
    }
    return response;
  }

  export function convert(response: Response): any {
    // IE sometimes returns 1223 when it should be 204
    if (response.status === 204 || response.status === 1223) {
      return;
    }

    const contentType = response.headers.get("content-type");
    if (!contentType) {
      throw new FetcherError(
        `Response ${response.url} has no contentType`,
        response
      );
    }

    if (contentType.indexOf("application/json") !== -1) return response.json();

    if (contentType.indexOf("text/plain") !== -1) return response.text();

    throw new FetcherError(
      `Response ${response.url} has unsupported contentType ${contentType}`,
      response
    );
  }

  export function fetch<T>(url: RequestInfo, init?: RequestInit): Promise<T> {
    return fetchImpl(baseUrl + url, patchRequestInit(init))
      .then((r: Response) => checkResponseStatus(r))
      .then((r: Response) => (r ? convert(r) : Promise.reject()))
      .then(null, (e: any) => Promise.reject(getOrCreateError(e)))
      .then(null, (e: FetcherError) =>
        errorHandler ? errorHandler(e) : Promise.reject(e)
      );
  }

  function getOrCreateError(e: any): FetcherError {
    if (e && (e.Message || e.Number)) {
      //errorsControl.setError(e);
      console.log(e);
    }

    if (e instanceof FetcherError) return e;
    return new FetcherError(e && e.toString(), e);
  }

  export function postJSON<T>(url: string, data: any): Promise<T> {
    return fetch(url, {
      method: "POST",
      headers: patchHeaders({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(data)
    });
  }

  export function patchJSON<T>(url: string, data: any): Promise<T> {
    return fetch(url, {
      method: "PATCH",
      headers: patchHeaders({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(data)
    });
  }

  export function patch<T>(url: string): Promise<T> {
    return fetch(url, {
      method: "PATCH",
      headers: patchHeaders({})
    });
  }

  export function del(url: string): Promise<void> {
    return fetch(url, {
      method: "DELETE",
      headers: patchHeaders({})
    });
  }

  export function post<T>(url: string): Promise<T> {
    return fetch(url, {
      method: "POST",
      headers: patchHeaders({}),
      body: "x"
    });
  }

  export function postText<T>(url: string, data: string): Promise<T> {
    return fetch(url, {
      method: "POST",
      headers: patchHeaders({
        "Content-Type": "text/plain; charset=UTF-8"
      }),
      body: data
    });
  }

  export function get<T>(url: string, data?: any): Promise<T> {
    return fetch(UrlBuilder.makeHref(url, data));
  }
}
