import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {
      quiz;
  constructor(private questionsService: QuestionsService) {

 }
 getQuizzes(): void {
   this.questionsService.getQuizzes()
       .subscribe(quiz => this.quiz= quiz);
 }


  ngOnInit() {
    this.getQuizzes();
  }

}
