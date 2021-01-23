import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import sampleData from '../assets/json/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angulartitle';

  Users: any = sampleData;

  constructor(private titleService: Title, private router: Router,
    private activatedRoute: ActivatedRoute) {}

  setDocTitle(title: string) {
     console.log('current title:::::' + this.titleService.getTitle());
     this.titleService.setTitle(title);
  }

  ngOnInit() {
    
  }
}
