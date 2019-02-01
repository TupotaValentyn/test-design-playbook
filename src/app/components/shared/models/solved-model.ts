import { Model } from './model';

export class SolvedModel {
  model: Model;
  mark: boolean;
  comment: {
    bad: string,
    good: string
  };
}
