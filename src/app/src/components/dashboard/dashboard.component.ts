import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:object;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9617eaac29fe48e48f9bcb204821a07f").subscribe((data:any)=>{
      this.data=data.articles;
      console.log(this.data);
      
    });
  }

}
