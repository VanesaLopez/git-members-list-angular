import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styles: []
})
export class MemberFormComponent {

  @Output() organizationChange: EventEmitter<string> = new EventEmitter();
  organization: string;

  changeOrganization() {
    this.organizationChange.emit(this.organization);
  }

}
