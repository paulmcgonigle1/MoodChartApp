import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { SpotifyAuthServiceService } from 'src/app/services/spotify-auth-service.service';
import { PlaylistService } from 'src/app/services/playlist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router ,private spotifyAuthService: SpotifyAuthServiceService){}

  ngOnInit():void{
    //this code checks if token is in local storage and then goes straight to home page
    // const token = localStorage.getItem('token');
    // if(token){
    //   this.router.navigate(['/home']);

    // }
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
      this.router.navigate(['/songs']);
     }
  }
  }