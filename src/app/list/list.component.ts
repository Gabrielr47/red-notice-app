import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  redNoticeList$ = this.apiService.getRedNotices();

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  openProfile(notice: any) {
    const id = notice.entity_id.replace('/', '-');
    this.router.navigate(['profile', id]);
  }

  refreshPage(pageNumber: number) {
    this.redNoticeList$ = this.apiService.getRedNotices(pageNumber);
  }

}
