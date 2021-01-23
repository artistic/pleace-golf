import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as firebase from 'firebase';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { NgAuthService } from "./ng-auth.service";

import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PlayComponent } from './components/play/play.component';
import { CoursesComponent } from './components/courses/courses.component';
import { InviteComponent } from './components/invite/invite.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { HelpComponent } from './components/help/help.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AddTournamentComponent } from './components/add-tournament/add-tournament.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    DashboardComponent,
    SettingsComponent,
    PlayComponent,
    CoursesComponent,
    InviteComponent,
    CoursesListComponent,
    CourseDetailComponent,
    NoPageFoundComponent,
    TermsComponent,
    PrivacyComponent,
    HelpComponent,
    TournamentComponent,
    SignInComponent,
    SignUpComponent,
    RankingsComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AddTournamentComponent,
    TournamentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for firestore
    AngularFireAuthModule
  ],
  providers: [
      NgAuthService,
      Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
