import {Fetcher} from '../Core/Fetcher';
import {IChar} from '../models/models';

export class CharApi {
  private static prefix = "/Char";

  public static getInfo(): Promise<IChar> {
    return Fetcher.post<IChar>(`${this.prefix}/GetInfo`);
  }

  public static create(charInfo: Partial<IChar>) {
    Fetcher.postJSON<Partial<IChar>>(`${this.prefix}/Create`, charInfo);
  }
}