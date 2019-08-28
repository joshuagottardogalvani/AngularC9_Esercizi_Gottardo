import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NewObjectComponent } from './new-object/new-object.component';
import { UserObjectsComponent } from './user-objects/user-objects.component';
import { ObjectsListComponent } from './objects-list/objects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewObjectComponent,
    UserObjectsComponent,
    ObjectsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
