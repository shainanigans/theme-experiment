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

  updateColor() {
    const css =
      ' :root {' +
      '--primary: #' +
      this.primary +
      ';' +
      '--secondary: #' +
      this.secondary +
      ';' +
      '}';
    const style = document.getElementById('cssVars');
    style.innerHTML = css;
  }
}
