import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthServiceService {

  constructor() { }
//o redirect the user to the Spotify Authorization Endpoint, you can use the window.location object in JavaScript to redirect the user to the URL.
  redirectToSpotifyAuth(){
    const clientId = 'c81078cdef9b4b0a9b67759341b0e85f';
    const redirectUri = 'http://localhost:4200/';
    const scope = 'user-library-read user-read-recently-played';
    const responseType = 'code';

    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;

    window.location.href = spotifyAuthUrl;
  }
}
