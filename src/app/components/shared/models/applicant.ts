export class Applicant {
  static STATUS_IS_SOLVED: string = 'Is solved';
  static STATUS_IS_FILLING: string = 'Is filling';
  static STATUS_EVALUATED: string = 'Evaluated';
  static STATUS_DEACTIVATED: string = 'Deactivated';
  static STATUS_EXPIRED: string = 'Expired';

  surname: string;
  first_name: string;
  second_name: string;
  email: string;
  token: string;
  status: string;
  created: Date;
  comment: string;
  expired: Date;

}
