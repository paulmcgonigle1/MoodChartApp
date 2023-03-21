import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpotifyAuthServiceService } from './services/spotify-auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SongsComponent } from './pages/songs/songs.component';
import { PlaylistmoodsComponent } from './pages/playlistmoods/playlistmoods.component';
import { PlaylistService } from './services/playlist.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SongsComponent,
    PlaylistmoodsComponent,
  

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // LoginModule
  ],
  providers: [
    // SpotifyAuthServiceService
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
