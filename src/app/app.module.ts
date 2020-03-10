import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module' ;
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { TrombinoscopeComponent } from './page/trombinoscope/trombinoscope.component';
import { UtilisateursComponent } from './page/utilisateurs/utilisateurs.component';
import { FicheUtilisateurComponent } from './page/fiche-utilisateur/fiche-utilisateur.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ActualiteComponent } from './page/actualite/actualite.component';
import { NewsComponent } from './page/news/news.component';
import { UneComponent } from './page/une/une.component';
import { AddDialogComponent } from './page/add-dialog/add-dialog.component';
import { FormNewsComponent } from './page/form-news/form-news.component';

// Services
import { AuthService } from './service/auth.service';

// Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    TrombinoscopeComponent,
    NavigationComponent,
    DashboardComponent,
    UtilisateursComponent,
    FicheUtilisateurComponent,
    ActualiteComponent,
    NewsComponent,
    UneComponent,
    AddDialogComponent,
    FormNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  entryComponents: [AddDialogComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
