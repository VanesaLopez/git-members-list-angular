import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MemberEntity } from '../models/member.model';

@Component({
  selector: '[app-member-row]',
  templateUrl: './member-row.component.html',
  styles: ['img{ max-width: 5rem;}']
})
export class MemberRowComponent {
  @Input() member: MemberEntity;
}
