import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { FishComponent } from './components/fish/fish.component';
import { FishItemComponent } from './components/fish-item/fish-item.component';
import {IssueService} from './issue.service'
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { DetailsComponent } from './views/details/details.component';
import { CreateComponent } from './views/create/create.component';
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
    FishItemComponent,
    ListComponent,
    DetailsComponent,
    CreateComponent,
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
