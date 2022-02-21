import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  redNoticeList$ = this.apiService.getRedNotices();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRedNotices().subscribe(data => console.log(data))
  }

  openProfile(notice: any) {
    console.log("notice", notice);
  }

}
