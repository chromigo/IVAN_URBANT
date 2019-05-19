export interface IChar {
  name: string;
  level: number;
  coins: number;
  experience: number;
  avatar: 1 | 2 | 3;
  lootboxes?: ICardInfo[];
}

export interface ICardInfo {
  status: CardStatus;
  card: ICard;
}

export interface ICard {
  id: string;
  type: CardType;
  title: string;
  description: string;
  experience: number;
  coins: number;
  answers?: string[];
  correctAnswer?: string;
}

export enum CardStatus {
  InProgress = 1,
  Skipped,
  Completed
}

export enum CardType {
  Task = 1,
  Question,
  Advice
}