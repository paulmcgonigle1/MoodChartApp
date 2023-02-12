import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public songs: any[] = [];
  constructor(private http:HttpClient,private route:ActivatedRoute){}

  // ngOnInit():void{
    // const accessToken = localStorage.getItem('token');

    // // Use the access token to make requests to the Spotify Web API
    // this.http.get('https://api.spotify.com/v1/me/player/recently-played', {
    //   headers: {
    //     'Authorization': 'Bearer ' + accessToken
    //   }
    // }).subscribe(response => {
    //   console.log(response);
    // });
    

    
  
    ngOnInit(): void {
      // Fetch the user's recently played songs from the Spotify Web API
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
      this.http.get('https://api.spotify.com/v1/me/player/recently-played', { headers }).subscribe((response: any) => {
        this.songs = response.items.map((item: any) => {
          return {
            name: item.track.name,
            artist: item.track.artists.map((artist: any) => artist.name).join(', '),
            album: item.track.album.name,
            image: item.track.album.images[0].url
          };
        });
      });
    }
  }


