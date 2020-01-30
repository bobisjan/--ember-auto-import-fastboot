import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service fastboot;

  async model() {
    if (this.fastboot.isFastBoot) {
      const { default: system } = await import('system');

      this.fastboot.shoebox.put('system', system);
      return system;
    } else {
      return this.fastboot.shoebox.retrieve('system');
    }
  }
}
