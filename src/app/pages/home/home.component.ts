import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyAuthServiceService } from 'src/app/services/spotify-auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public songs: any[] = [];
  constructor(private http:HttpClient,private route:ActivatedRoute, private spotifyService:SpotifyAuthServiceService){}
 
  
    ngOnInit(): void {
      // Fetch the user's recently played songs from the Spotify Web API
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
      //this is just getting recently played songs
      this.spotifyService.getRecentlyPlayedTracks().subscribe((response: any) => {
        this.songs = response.items.map((item: any) => {
          const track = item.track;
          const song = {
            name: track.name,
            artist: track.artists.map((artist: any) => artist.name).join(', '),
            album: track.album.name,
            image: track.album.images[0].url,
            // Initialize audio feature properties to empty strings
            valence: '',
            energy: '',
            danceability: '',
            mood: ''
          };
  
          // Fetch the audio features for the song
          this.spotifyService.getAudioFeatures(track.id).subscribe((audioFeatures: any) => {
            // Set the audio feature properties for the song
            song.valence = audioFeatures.valence.toFixed(2);
            song.energy = audioFeatures.energy.toFixed(2);
            song.danceability = audioFeatures.danceability.toFixed(2);
             song.mood = this.getMood(audioFeatures.valence, audioFeatures.energy, audioFeatures.danceability);

          });
  
          return song;
        });
      });
    }
//getting mood based on certain featues
    getMood(valence: number, energy: number, danceability: number): string {
      let mood: string;
      if (valence >= 0.5 && energy >= 0.5 && danceability >= 0.5) {
        mood = 'Happy';
      } else if (valence < 0.5 && energy >= 0.5 && danceability >= 0.5) {
        mood = 'Sad';
      } else if (valence >= 0.5 && energy < 0.5 && danceability >= 0.5) {
        mood = 'Calm';
      } else if (valence >= 0.5 && energy >= 0.5 && danceability < 0.5) {
        mood = 'Romantic';
      } else {
        mood = 'Unknown';
      }
      return mood;
    }
  }