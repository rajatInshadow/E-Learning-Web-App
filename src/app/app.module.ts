import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './myComponent/courses/courses.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesService } from './service/courses.service';
import { FooterComponent } from './mycomponents/footer/footer.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    HeaderComponent,
    routingComponents,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
