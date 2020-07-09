import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeekOne } from './weekone';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  weekonUrl = 'http://localhost/tests/free-prn';

  constructor(private http: HttpClient) { }

  readWeekone(): Observable<WeekOne[]>{
    return this.http.get<WeekOne[]>(`${this.weekonUrl}/weekone.php`);
  }
  weekOneDetails(id: number): Observable<WeekOne | undefined > {
    return this.readWeekone()
      .pipe(
        map((one: WeekOne[]) => one.find(o => o.weekone_id === id))
      );
  }

  readWeektwo(): Observable<WeekOne[]>{
    return this.http.get<WeekOne[]>(`${this.weekonUrl}/weektwo.php`);
  }

  readWeekthree(): Observable<WeekOne[]>{
    return this.http.get<WeekOne[]>(`${this.weekonUrl}/weekthree.php`);
  }

  readWeekfour(): Observable<WeekOne[]>{
    return this.http.get<WeekOne[]>(`${this.weekonUrl}/weekfour.php`);
  }

}
