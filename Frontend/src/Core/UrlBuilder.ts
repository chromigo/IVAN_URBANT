interface IParam {
  name?: string;
  value?: any;
}

export class UrlBuilder {
  private path: string;
  private params: IParam[];

  constructor(path: string) {
    this.path = path;
    this.params = [];
  }

  getHref(needUnsafe: boolean, needFiltered: boolean): string {
    let queryString: string[] = [];
    let params = !needFiltered
      ? this.params
      : this.params.filter(function(p) {
          return !(p.value == null && p.value == "");
        });

    let paramsLength = params.length;
    if (paramsLength < 1) {
      return this.path;
    }

    this.path += this.path.indexOf("?") > -1 ? "&" : "?";

    for (let i = 0; i < paramsLength; i++) {
      let param = params[i];
      queryString.push(
        param.name +
          "=" +
          (needUnsafe ? param.value : encodeURIComponent(param.value))
      );
    }
    return this.path + queryString.join("&");
  }

  getHrefUnsafe(): string {
    return this.getHref(true, false);
  }

  getHrefFiltered(): string {
    return this.getHref(false, true);
  }

  getHrefUnsafeAndFiltered(): string {
    return this.getHref(true, true);
  }

  addParameter(name: string, value: any): void {
    this.params.push({ name: name, value: value });
  }

  addParametersObject(parametersObj: any): void {
    for (let i in parametersObj) {
      if (parametersObj.hasOwnProperty(i)) {
        this.params.push({ name: i, value: parametersObj[i] });
      }
    }
  }

  static makeUnsafeHref(baseUrl: string, data?: any) {
    let urlBuilder = new UrlBuilder(baseUrl);
    if (data) urlBuilder.addParametersObject(data);
    return urlBuilder.getHrefUnsafe();
  }

  static makeHref(baseUrl: string, data?: any) {
    let urlBuilder = new UrlBuilder(baseUrl);
    if (data) urlBuilder.addParametersObject(data);
    return urlBuilder.getHrefFiltered();
  }
}
