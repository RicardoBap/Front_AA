import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <small *ngIf="temErro()" class="ui-message ui-messages-error">
      {{ text }}
    </small>
  `,
  styles: [`
    .ui-messages-error {
      margin-top: 3px;
      padding: 2px;
      font-weight: bold;
      background-color: red;
      color: #FFFFFF;
    }
  `]
})
export class MessageComponent  {

  @Input() error: string
  @Input() control: FormControl
  @Input() text: string

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty
  }

}
