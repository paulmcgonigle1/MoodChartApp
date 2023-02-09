import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { SpotifyAuthServiceService } from './services/spotify-auth-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LoginModule
  ],
  providers: [
    // SpotifyAuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
