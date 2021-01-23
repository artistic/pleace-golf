import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Course } from 'src/app/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

 export class CoursesComponent implements OnInit, OnDestroy {



  courses: Course[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();


  continent = [
  {
    "name" : "America, South America, Central America and Canada",
    "image" : "north-america.png",
  },
  {
    "name" : "Africa and  surrounding islands",
    "image" : "africa.png",
  },
  {
    "name" : "Asia and surrounding islands",
    "image" : "asia.png",
  },
  {
    "name" : "Oceania Australia and islands of Oceania",
    "image" : "south-america.png",
  },
  {
    "name" : "Europe Great Britain, N. Ireland and surrounding islands",
    "image" : "europe.png",
  }
  ];

  constructor(
      private activatedRoute: ActivatedRoute,
      private dataService: DataService
    ) { }

  ngOnInit() {

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<Course[]>) => {
      console.log(res);
      this.courses = res.body;
    })
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  public firstPage() {
    this.courses = [];
    this.dataService.sendGetRequestToUrl(this.dataService.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.courses = res.body;
    })
  }
  public previousPage() {

    if (this.dataService.prev !== undefined && this.dataService.prev !== '') {
      this.courses = [];
      this.dataService.sendGetRequestToUrl(this.dataService.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.courses = res.body;
      })
    }

  }
  public nextPage() {
    if (this.dataService.next !== undefined && this.dataService.next !== '') {
      this.courses = [];
      this.dataService.sendGetRequestToUrl(this.dataService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.courses = res.body;
      })
    }
  }
  public lastPage() {
    this.courses = [];
    this.dataService.sendGetRequestToUrl(this.dataService.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.courses = res.body;
    })
  }



}
