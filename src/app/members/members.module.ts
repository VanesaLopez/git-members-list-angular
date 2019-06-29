import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {
  MemberRowComponent,
  MemberHeadComponent,
  MembersTableComponent
} from './members-table';

@NgModule({
  imports: [
    PaginationModule.forRoot(),
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
  ],
  exports: [
    MembersTableComponent
  ]
})
export class MembersModule { }
