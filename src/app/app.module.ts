import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageComponent,
	
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HighlightedDirective,
		CommonModule,
    NgxUnlessDirective
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }