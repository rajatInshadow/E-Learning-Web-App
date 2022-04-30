import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/model/courses';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public course$!: Observable<Courses[]>;
  constructor(private courseService: CoursesService, public rout: Router) {}

  ngOnInit(): void {
    this.course$ = this.courseService.getCourses();
  }
}
