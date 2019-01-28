import { SolvedModel } from './solved-model';
import { Applicant } from './applicant';

export class Result {
  solved_models: Array<SolvedModel>;
  applicant: Applicant;
  solved_date: Date;
}
