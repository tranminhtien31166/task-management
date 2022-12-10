import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService} from './backend.service';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from '@app/layouts/header/header.component';
import { AdminComponent } from '@app/layouts/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  	BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
