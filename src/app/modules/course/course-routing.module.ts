import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCourseComponent } from "./components/create-course/create-course.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create' },
    { path: 'create', component: CreateCourseComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }