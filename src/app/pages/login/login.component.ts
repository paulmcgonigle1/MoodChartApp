import { Component } from '@angular/core';
import { SpotifyAuthServiceService } from 'src/app/services/spotify-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private spotifyAuthService: SpotifyAuthServiceService){}

  initiateAuth(){
    this.spotifyAuthService.redirectToSpotifyAuth();
  }
}
