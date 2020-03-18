import { Component, HostBinding } from '@angular/core';

enum Themes {
  YOTA = 'yota-theme',
  YOTA_INVERSE = 'yota-inverse-theme',
  YOTA_DARK = 'yota-dark-theme'
}

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html'
})
export class WrapperComponent {
  @HostBinding('class')
  private classes = Themes.YOTA;

  changeTheme() {
    this.classes = this.classes === Themes.YOTA_INVERSE ? Themes.YOTA : Themes.YOTA_INVERSE;
  }
}
