import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  redNotice$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') || '';

      this.redNotice$ = this.apiService.getRedNoticeProfile(id);
      this.apiService.getRedNoticeProfile(id).subscribe(data => {
        console.log(data);
      });

    });
  }


}
