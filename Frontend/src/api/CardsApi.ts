import {Fetcher} from '../Core/Fetcher';
import {IChar} from '../models/models';

export class CardsApi {
  private static prefix = "/api/Cards";

  public static async skipCard(id: number): Promise<void> {
    return Fetcher.put(`${this.prefix}/${id}`);
  }

  /*public static async getInfo(): Promise<IChar> {
    try {
      const char = await Fetcher.get<IChar>(this.prefix);
      if (char) {
        return char;
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static create(charInfo: Partial<IChar>) {
    Fetcher.postJSON<Partial<IChar>>(this.prefix, charInfo);
  }*/
}