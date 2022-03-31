import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Courses } from 'src/app/model/courses';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
 

  constructor(private courseService: CoursesService) {}

  ngOnInit() {
    // this.course = this.courseService.getCourses();
  }
}
