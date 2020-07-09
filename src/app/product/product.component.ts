import { Component, OnInit } from '@angular/core';
import { WeekOne } from './weekone';
import { ApiService } from './api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  weekone: WeekOne[];
  weektwo: WeekOne[];
  weekthree: WeekOne[];
  weekfour: WeekOne[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.readWeekone();
    this.readWeektwo();
    this.readWeekthree();
    this.readWeekfour();
  }

  readWeekone(){
    this.apiService.readWeekone().subscribe((weekone: WeekOne[]) => {
      this.weekone = weekone;
      console.log(this.weekone);
    });
  }

  readWeektwo(){
    this.apiService.readWeektwo().subscribe((weektwo: WeekOne[]) => {
      this.weektwo = weektwo;
      console.log(this.weektwo);
    });
  }

  readWeekthree(){
    this.apiService.readWeekthree().subscribe((weekthree: WeekOne[]) => {
      this.weekthree = weekthree;
      console.log(this.weekthree);
    });
  }

  readWeekfour(){
    this.apiService.readWeekfour().subscribe((weekfour: WeekOne[]) => {
      this.weekfour = weekfour;
      console.log(this.weekfour);
    });
  }

}
