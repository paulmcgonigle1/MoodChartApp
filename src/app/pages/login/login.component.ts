import { Component } from '@angular/core';
import { SpotifyAuthServiceService } from 'src/app/services/spotify-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private spotifyAuthService: SpotifyAuthServiceService){}

  ngOnInit():void{
    this.verifyUrlCallBackToken();
  }

  initiateAuth(){
    this.spotifyAuthService.redirectToSpotifyAuth();

  }
  getSongs(){
    
    this.spotifyAuthService.getRecentlyPlayedTracks();
  }

  verifyUrlCallBackToken(){
    const token = this.spotifyAuthService.getUrlCallbackToken();
    console.log(token);

    localStorage.setItem('token',this.spotifyAuthService.getUrlCallbackToken())
    // if(!!token){
    //   this.spotifyAuthService.defineAccessToken(token);
    // }
  }
}
