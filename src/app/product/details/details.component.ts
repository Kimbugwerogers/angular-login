import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeekOne } from '../weekone';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  weekone: WeekOne[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiService) { }

  ngOnInit(): void {

    this.readWeekone();

    // const param = this.route.snapshot.paramMap.get('weekone_id');
    // if (param) {
    //   const id = +param;
    //   console.log(id);
    //   this.weekOneDetials(id);
    // }
  }

  // weekOneDetials(id: number){
  //   this.apiService.weekOneDetails(id).subscribe({
  //     next: weekone => this.weekone = weekone,
  //   });
  // }

  readWeekone(){
    this.apiService.readWeekone().subscribe((weekone: WeekOne[]) => {
      this.weekone = weekone;
    });
  }

  onBack(): void {
    this.router.navigate(['/product']);
  }

}
