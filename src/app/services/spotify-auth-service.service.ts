import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthServiceService {

  constructor(private http:HttpClient) { }
  // constructor() { }
 
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
  getUrlCallbackToken(){
    // console.log(window.location.hash)
    if (!window.location.hash)
    return '';

    //getting the access token params
    //MIGHT NEED TO FIX AND NOT SURE IF GETTING RIGHT PARAMS.
    const params =  window.location.hash.substring(1).split('&');
    // console.log(params);
    return params[0].split('=')[1];

    
    
  }
  
  // defineAccessToken(token:string){
  //   this.spotifyApi.setAccessToken(token);
  //   localStorage.setItem('token',token);
  //   //testing the skip to next method but mot working
  //   console.log(token);
  //   this.spotifyApi.skipToNext();
    
    
  // }
  //using httpClient module to request tracks and then subscribe to data.
  getRecentlyPlayedTracks(limit:number = 50): Observable<any> {
    const accessToken = localStorage.getItem('token');
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + accessToken
    })
    
    return this.http.get(`https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`, { headers });
    

  }
  getAudioFeatures(trackId: string): Observable<any> {
    const accessToken = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + accessToken
    });

    return this.http.get(`https://api.spotify.com/v1/audio-features/${trackId}`, { headers });
  }
}
