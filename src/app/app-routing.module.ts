import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PlayComponent } from './components/play/play.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { InviteComponent } from './components/invite/invite.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { HelpComponent } from './components/help/help.component';

import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { AddTournamentComponent } from './components/add-tournament/add-tournament.component';

import { RankingsComponent } from './components/rankings/rankings.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';



import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {title: 'Dashboard'} },
  { path: 'tutorials', component: TutorialsListComponent, data: {title: 'Dashboard'} },
  { path: 'add', component: AddTutorialComponent, data: {title: 'Dashboard'} },
  { path: 'settings', component: SettingsComponent, data: {title: 'Settings'} },
  { path: 'play', component: PlayComponent, data: {title: 'Play Match'} },
  { path: 'courses', component: CoursesComponent, data: {title: 'Courses'} },
  { path: 'invite', component: InviteComponent, data: {title: 'Invite Friend'} },
  { path: 'courses-list', component: CoursesListComponent, data: {title: 'Course List'} },
  { path: 'course-detail/:id', component: CourseDetailComponent, data: {title: 'Course'} },
  { path: 'terms', component: TermsComponent, data: {title: 'Terms And Conditions'} },
  { path: 'privacy', component: PrivacyComponent, data: {title: 'Privacy Policy'} },
  { path: 'help', component: HelpComponent, data: {title: 'Help'} },

  { path: 'tournaments', component: TournamentsComponent, data: {title: 'Tournaments'} },
  { path: 'tournament', component: TournamentComponent, data: {title: 'Tournament'} },
  { path: 'add-tournament', component: AddTournamentComponent, data: {title: 'Add New Tournament'} },


  { path: 'rankings', component: RankingsComponent, data: {title: 'Rankings'} },
  { path: 'sign-in', component: SignInComponent, data: {title: 'Sign In'} },
  { path: 'sign-up', component: SignUpComponent, data: {title: 'Sign Up'} },
  { path: 'forgot-password', component: ForgotPasswordComponent, data: {title: 'Forgot Password'} },
  { path: 'email-verification', component: VerifyEmailComponent, data: {title: 'Email Verification'} },


  { path: '**', component: NoPageFoundComponent, data: {title: 'Dashboard'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

