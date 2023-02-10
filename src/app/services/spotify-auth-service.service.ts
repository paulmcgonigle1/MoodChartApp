import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthServiceService {

  constructor() { }
 
//o redirect the user to the Spotify Authorization Endpoint, you can use the window.location object in JavaScript to redirect the user to the URL.
  redirectToSpotifyAuth(){
    const clientId = `${environment.clientId}&`;
    const redirectUri = `${environment.redirectUrl}&`;
    const scope = `${environment.scopes}&`;
    // const responseType = 'response_type=token&show_dialog=true';
    const responseType = 'token';

    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;

    window.location.href = spotifyAuthUrl;
  }
}
