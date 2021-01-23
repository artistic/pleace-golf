import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { map } from 'rxjs/operators';
import Courses from 'src/app/models/courses.model';
import { PostService } from 'src/app/services/post.service'

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

	courses?: Courses[];
  currentCourse?: Courses;
  currentIndex = -1;
  club_membership = '';

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [3, 6, 9, 12];
  continent = [
  'America, South America, Central America and Canada',
  'Africa and  surrounding islands',
  'Asia and surrounding islands',
  'Oceania Australia and islands of Oceania',
  'Europe Great Britain, N. Ireland and surrounding islands'
  ];


  constructor(
    private coursesService: CoursesService,
    private postService: PostService
    ) { }

  ngOnInit(): void {
    this.retrieveCourses();
    this.fetchPosts();
  }

  refreshList(): void {
    this.currentCourse = undefined;
    this.currentIndex = -1;
    this.retrieveCourses();
  }

  retrieveCourses(): void {
    this.coursesService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.courses = data;
    });
  }

  setActiveCourse(courses: Courses, index: number): void {
    this.currentCourse = courses;
    this.currentIndex = index;
  }

  fetchPosts(): void {
    this.postService.getAllPosts()
      .subscribe(
        response => {
          this.POSTS = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onTableDataChange(event : any){
    this.page = event;
    this.fetchPosts();
  }  

  onTableSizeChange(event : any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  } 
}
