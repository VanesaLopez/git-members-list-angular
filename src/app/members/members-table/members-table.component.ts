import { Component } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent {
  members: MemberEntity[] = [];
  returnedmembers: MemberEntity[]; 
  itemsPerPage = 3;

  constructor(private membersApi: MembersApiService) { }
 
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedmembers = this.members.slice(startItem, endItem);
  }

  loadMembers() {
    this.membersApi.getAllMembers('lemoncode')
      .subscribe((ms) => {
        this.members = ms
        this.returnedmembers = this.members.slice(0, this.itemsPerPage);
      });
  }

}
