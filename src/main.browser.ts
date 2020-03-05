import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppBrowserModule } from 'app/app.browser.module';
import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppBrowserModule)
  .then(module => {
    // for showing loading indicator
    console.log('LOADED');
    // hide loading here dom.remove()

    return module;
  })
  .catch(error => console.log(error));

if (environment.hmr) {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap().catch(err => console.log(err));
}
