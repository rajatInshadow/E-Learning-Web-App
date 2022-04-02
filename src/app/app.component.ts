import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'institute';
  public displayNavbar = false;
  public currentRoute!: string;

  constructor(private router: Router){
    // console.log(this.displayNavbar);
    // this.currentRoute=router.url;
    
    
    // router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
    //       .subscribe((event: { url: string; }) => 
    //        {
    //           this.currentRoute = event.url;          
    //           console.log(event.url);
    //        });


    //       if (router.url==this.currentRoute) {
    //         this.displayNavbar = true;
    //         console.log(this.displayNavbar);
    //       }

          
        }
}
