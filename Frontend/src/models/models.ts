export interface IChar {
  name: string;
  level: number;
  coins: number;
  exp: number;
  avatar: string;
  lootboxes?: ICard[];
}

export interface ICard {
  id: string;
  type: CardType;
  title: string;
  description: string;
  exp: number;
  coins: number;
  status: CardStatus;
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