import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyAuthServiceService } from 'src/app/services/spotify-auth-service.service';
import { GaService } from 'src/app/services/ga.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router ,private spotifyAuthService: SpotifyAuthServiceService, private gaservice:GaService){}

  ngOnInit():void{

    this.verifyUrlCallBackToken();
  }
  initiateAuth(){
    this.spotifyAuthService.redirectToSpotifyAuth();
    
    this.gaservice.sendEvent('login', 'successful');
    

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
