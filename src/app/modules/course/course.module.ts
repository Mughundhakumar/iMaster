import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../app-material.module'
import { CourseRoutingModule } from './course-routing.module';
import { CreateCourseComponent } from './components/create-course/create-course.component';

@NgModule({
  declarations: [
    CreateCourseComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
