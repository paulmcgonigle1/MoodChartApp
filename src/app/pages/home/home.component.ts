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
  public moodCounts: Record<string, number> = {
    Happy: 0,
    Sad: 0,
    Calm: 0,
    Romantic: 0,
    Upbeat: 0,
    Chill: 0,
    Talkative: 0,
    Unknown: 0
  };
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
             // Update mood count
             this.moodCounts[song.mood]++;
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

    getMostCommonMood(): string {
      // Get an array of all the moods from the songs
      const moods = this.songs.map(song => song.mood);
    
      // Count the occurrences of each mood using reduce()
      const moodCounts: Record<string, number> = moods.reduce((counts, mood) => {
        counts[mood] = (counts[mood] || 0) + 1;
        return counts;
      }, {});
      
    
      // Find the mood with the highest count using Object.entries() and reduce()
      const mostCommonMood = Object.entries(moodCounts).reduce((mostCommon: { mood: string, count: number }, [mood, count]) => {
        return count > mostCommon.count ? { mood, count } : mostCommon;
      }, { mood: '', count: 0 });
      

    
      return mostCommonMood.mood;
    }
    
    
  }