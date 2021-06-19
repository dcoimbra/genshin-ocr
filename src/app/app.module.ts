import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ArtifactCreateComponent } from './artifacts/artifact-create/artifact-create.component';
import { HeaderComponent } from './header/header.component';
import { ArtifactListComponent } from './artifacts/artifact-list/artifact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtifactCreateComponent,
    HeaderComponent,
    ArtifactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
