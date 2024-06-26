import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
  ],
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
  template: `
    <h1>Curso de Angular</h1>

    <app-template-binding />
    <app-template-variables />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
