import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CrudComponent } from './views/crud/crud.component';
import { AboutComponent } from './views/about/about.component';
import { FaqComponent } from './views/faq/faq.component';
import { AdminComponent } from './views/admin/admin.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'gallery', component: GalleryComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
