import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainQuestionsComponent } from './components/questions-components/main-questions/main-questions.component';
import { MainViewQuestionComponent } from './components/view-question-components/main-view-question/main-view-question.component';
import { MainAskQuestionComponent } from './components/ask-question-components/main-ask-question/main-ask-question.component';
import { MainAboutComponent } from './components/about/main-about/main-about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: MainQuestionsComponent },
  { path: 'questions', component: MainQuestionsComponent },
  { path: 'question/:questionId', component: MainViewQuestionComponent },
  { path: 'ask-question', component: MainAskQuestionComponent },
  { path: 'about', component: MainAboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
