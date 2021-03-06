import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoggedOutPageComponent } from './logged-out-page/logged-out-page.component';
import { UnauthorizedPageComponent } from './unauthorized-page/unauthorized-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: 'unauthorized', component: UnauthorizedPageComponent },
  { path: 'logged-off', component: LoggedOutPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
