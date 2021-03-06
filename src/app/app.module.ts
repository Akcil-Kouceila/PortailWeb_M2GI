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
import { FormsModule } from '@angular/forms';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

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
import { AddDialogComponent } from './page/dialog-add-news/add-dialog.component';
import { FormNewsComponent } from './page/dialog-add-news/form-news/form-news.component';
import { DialogEditNewsComponent } from './page/dialog-edit-news/dialog-edit-news.component';
import { FormActuComponent } from './page/dialog-edit-news/form-actu/form-actu.component';
import { DialogEditUserComponent } from './page/dialog-edit-user/dialog-edit-user.component';
import { FormUserComponent } from './page/dialog-edit-user/form-user/form-user.component';

// Services
import { AuthService } from './service/auth.service';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

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
    AddDialogComponent,
    FormNewsComponent,
    DialogEditNewsComponent,
    FormActuComponent,
    DialogEditUserComponent,
    FormUserComponent,
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
    FormsModule,
    RichTextEditorAllModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  entryComponents: [AddDialogComponent, DialogEditNewsComponent, DialogEditUserComponent],
  providers: [AuthService, AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
