import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav-components/top-nav/top-nav.component';
import { HamburgerMenuComponent } from './components/top-nav-components/hamburger-menu/hamburger-menu.component';
import { SearchComponent } from './components/top-nav-components/search/search.component';
import { MainQuestionsComponent } from './components/questions-components/main-questions/main-questions.component';
import { QuestionsHeadingComponent } from './components/questions-components/questions-heading/questions-heading.component';
import { QuestionsContainerComponent } from './components/questions-components/questions-container/questions-container.component';
import { QuestionsPaginationComponent } from './components/questions-components/questions-pagination/questions-pagination.component';
import { QuestionComponent } from './components/questions-components/question/question.component';
import { MainAskQuestionComponent } from './components/ask-question-components/main-ask-question/main-ask-question.component';
import { AskQuestionHeadingComponent } from './components/ask-question-components/ask-question-heading/ask-question-heading.component';
import { AskQuestionFormComponent } from './components/ask-question-components/ask-question-form/ask-question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HamburgerMenuComponent,
    SearchComponent,
    MainQuestionsComponent,
    QuestionsHeadingComponent,
    QuestionsContainerComponent,
    QuestionsPaginationComponent,
    QuestionComponent,
    MainAskQuestionComponent,
    AskQuestionHeadingComponent,
    AskQuestionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
