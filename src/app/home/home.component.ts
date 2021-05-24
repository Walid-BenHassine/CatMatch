import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cats: any | undefined;
  score : any = 1;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCats().subscribe(data => {
        this.cats = data
        console.log(this.cats);
      }
    );
  }

}
