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
  expires: Date;

  getFullName() {
    return `${this.surname} ${this.first_name} ${this.second_name}`;
  }

  getShortFullName() {
    let shortName: string = this.surname;
    if (this.first_name && this.first_name.charAt) {
      shortName += this.first_name.charAt(0) + ".";
    }
    if (this.second_name && this.second_name.charAt) {
      shortName += this.second_name.charAt(0) + ".";
    }
    return shortName;
  }

}
