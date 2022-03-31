import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/model/courses';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
 public course!:Courses[];
  constructor( private courseService:CoursesService) {}

  ngOnInit(): void {
    this.course=this.courseService.getCourses();
  }
}
