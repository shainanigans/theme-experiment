import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'theme-experiment';
  primary: string;
  secondary: string;

  ngOnInit() {
    this.primary = '6369d1';
    this.secondary = '60e1e0';
  }

  /**
   * Style must be removed and readded rather than modified
   * In order to trigger the CSS Vars Ponyfill
   */
  updateColor() {
    const oldStyle = document.getElementById('cssVars');
    const head = document.getElementsByTagName('head')[0];
    head.removeChild(oldStyle);
    const newStyle = document.createElement('style');
    newStyle.id = 'cssVars';
    head.appendChild(newStyle);
    const css =
      ' :root {' +
      '--primary: #' +
      this.primary +
      ';' +
      '--secondary: #' +
      this.secondary +
      ';' +
      '}';
    newStyle.innerHTML = css;
  }
}
