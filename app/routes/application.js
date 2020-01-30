/* global FastBoot */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service fastboot;

  model() {
    if (this.fastboot.isFastBoot) {
      const os = FastBoot.require('os');
      let system = {
        platform: os.platform(),
      };

      this.fastboot.shoebox.put('system', system);
      return system;
    } else {
      return this.fastboot.shoebox.retrieve('system');
    }
  }
}
