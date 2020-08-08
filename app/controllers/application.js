import Controller from '@ember/controller';
import fetch from 'fetch';

export default class ApplicationController extends Controller {
  async data() {
    return await fetch("dummy", {});
  }
}
