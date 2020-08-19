import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishComponent } from './components/fish/fish.component';
import { FishAddComponent } from './components/fish-add/fish-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FishComponent,
    FishAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
