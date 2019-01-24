export class Model {
  static IMAGE_PREFIX: string = '../../assets';
  static DEFAULT_IMAGE_URL: string = '../../assets/empty_img.png';

  url: string;
  answer: boolean;
  name: string;

  getImageUrl() {
    if (this.url && this.url.charAt) {
      if (this.url.charAt(0) == '/') {
        return Model.IMAGE_PREFIX + this.url;
      } else {
        return `${Model.IMAGE_PREFIX}/${this.url}`;
      }
    } else {
      console.error('USE DEFAULT IMAGE -- ORIGINAL IMAGE NOT INSTALL');
      return Model.DEFAULT_IMAGE_URL;
    }
  }
}
