import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyAuthServiceService } from 'src/app/services/spotify-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router ,private spotifyAuthService: SpotifyAuthServiceService){}

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
    if(!!token){
      this.router.navigate(['/home']);
     }
  }
}
