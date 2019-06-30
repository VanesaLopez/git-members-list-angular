import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: ['.spinner-grow {width: 4rem; height: 4rem;}']
})
export class MembersTableComponent implements OnInit {
  members: MemberEntity[] = [];
  returnedmembers: MemberEntity[]; 
  itemsPerPage = 5;
  isLoading = false;
  organization = 'lemoncode';
  error = 'Nothing to display!!';

  constructor(private membersApi: MembersApiService) { }

  ngOnInit(): void {
    this.loadMembers(this.organization);
  }
 
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedmembers = this.members.slice(startItem, endItem);
  }

  loadMembers(organization: string) {
    this.isLoading = true;
    this.members = [];
    this.membersApi.getAllMembers(organization)
      .subscribe((ms: MemberEntity[]) => {
        this.members = ms
        this.isLoading = false;
        this.organization = organization;
        this.returnedmembers = this.members.slice(0, this.itemsPerPage);
      },
      (error) => {
        this.isLoading = false;
        this.members = [];
        this.returnedmembers = [];
        this.error = `${organization} ${error.error.message}!!`;
      }
      );
  }
}
