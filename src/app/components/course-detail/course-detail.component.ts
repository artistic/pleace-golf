import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import  Courses  from 'src/app/models/courses.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

	club_id: string;
	currentCourse: Courses = {
    club_id: '',
    club_name: ''
  };
  message = '';

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router)  { 
  	this.club_id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.message = '';
    this.getCourse(this.route.snapshot.paramMap.get('id'));
  }

  getCourse(id): void {
    this.courseService.read(club_id)
    .subscribe(
      course => {
        this.currentCourse = course;
        console.log(course);
      },
      error => {
        console.log(error);
      });
  }

}
