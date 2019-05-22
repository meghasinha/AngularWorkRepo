import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from  './question-form/question-form.component';
import { ResultsComponent } from './results/results.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsService } from './questions.service';


const appRoutes:Routes=[
  {path:'welcome', component:WelcomeComponent},
  {path:':name', component:QuestionsComponent},
  {path:'',redirectTo:"welcome", pathMatch:"prefix" },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    ResultsComponent,
    WelcomeComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
