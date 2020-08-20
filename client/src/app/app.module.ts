import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { FishComponent } from './components/fish/fish.component';
import { ListComponent } from './views/list/list.component';
import { DetailsComponent } from './views/details/details.component';
import { CreateComponent } from './views/create/create.component';


import {IssueService} from './issue.service';
import { FishItemOneComponent } from './components/fish-item-one/fish-item-one.component'

const routes: Routes = [
 {path: 'create', component:CreateComponent,},
 {path: 'fish', component:ListComponent},
{path: 'fish/:id', component:DetailsComponent},
{path: "", redirectTo:'list', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    FishComponent,
    ListComponent,
    DetailsComponent,
    CreateComponent,
    FishItemOneComponent,
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
