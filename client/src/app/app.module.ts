import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
//components
import { AppComponent } from './app.component';
import { FishComponent } from './components/fish/fish.component';
import { ListComponent } from './views/list/list.component';
import { DetailsComponent } from './views/details/details.component';
import { CreateComponent } from './views/create/create.component';
import { RegistertwoComponent } from './components/registertwo/registertwo.component'
import { LogintwoComponent } from './components/logintwo/logintwo.component';
//services
import { UserService } from './service/user.service';
import { FishService } from './service/fish.service';



const routes: Routes = [
 
  {path: 'create', component:CreateComponent,},
  {path: 'fish', component:ListComponent},
  {path: 'fish/:id', component:DetailsComponent},
  {path: 'login', component: LogintwoComponent},
  {path:"register", component: RegistertwoComponent
}, {path: "", redirectTo:'list', pathMatch:'full'},

]
@NgModule({
  declarations: [
    AppComponent,
    FishComponent,
    ListComponent,
    DetailsComponent,
    CreateComponent,
    RegistertwoComponent,
    LogintwoComponent,
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [FishService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
