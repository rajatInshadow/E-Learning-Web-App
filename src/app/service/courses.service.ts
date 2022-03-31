import { Injectable } from '@angular/core';
import { Courses } from '../model/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses!: Courses[];
  constructor() {}
  getCourses(): Courses[] {
    return [
      {
        name: 'Machine learning',
        imgUrl: '../../assets/eduford_img/machineLearning.jpg',
        price: 200,
        description:
          ' Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.',
      },
      {
        name: 'Web Development',
        imgUrl: '../../assets/eduford_img/webDevelopment.jpg',
        price: 200,
        description:
          ' Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.',
      },
      {
        name: 'Cyber Security',
        imgUrl: '../../assets/eduford_img/cyberSecurity.jpg',
        price: 200,
        description:
          'Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.',
      },
    ];
  }
}
