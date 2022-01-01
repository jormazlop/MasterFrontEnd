import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PrivateHeaderComponent } from './components/private-header/private-header.component';
import { PublicMenuComponent } from './components/public-menu/public-menu.component';
import { PrivateMenuComponent } from './components/private-menu/private-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AboutComponent } from './views/about/about.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { CrudComponent } from './views/crud/crud.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

// Material UI
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardSectionComponent } from './components/card-section/card-section.component';
import { FaqComponent } from './views/faq/faq.component';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './views/admin/admin.component';

// Ng2-Chart
import { NgChartsModule } from 'ng2-charts';

// Data-tables
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    GalleryComponent,
    CrudComponent,
    ProfileComponent,
    CardSectionComponent,
    FaqComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    NgChartsModule,
    FormsModule,
    DataTablesModule,
    NgbModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
