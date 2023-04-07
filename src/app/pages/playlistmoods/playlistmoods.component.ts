import { Component } from '@angular/core';
import { using, from } from 'rxjs';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlistmoods',
  templateUrl: './playlistmoods.component.html',
  styleUrls: ['./playlistmoods.component.scss']
})
export class PlaylistmoodsComponent {

  public playlists: any[] = [];
  public selectedPlaylist: any = null;
  public moods: any[] = [];
  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.getPlaylists().subscribe(
      data => {
        console.log(data);
       
        this.playlists = data;
      },
      error => {
        console.log(error);
      }
    );
    this.playlistService.getMoods().subscribe(
      data => {
        console.log(data);
        this.moods = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  showPlaylistSongs(playlist: any) {
    this.selectedPlaylist = { 
      _id: playlist._id,
      name: playlist.name,
      mood: playlist.mood,
      songs: playlist.songs.map((song: any) => {
        return {
          name: song.name,
          image: song.image
        }
      })
    };
  }
  getPlaylistCountByMood(mood: string): number {
    return this.playlists.filter(playlist => playlist.mood === mood).length;
  }
  
  deletePlaylist(playlist: any) {
    console.log(playlist);
    this.playlistService.deletePlaylist(playlist._id).subscribe(
      data => {
        // Remove the deleted playlist from the array
        this.playlists = this.playlists.filter(p => p._id !== playlist._id);
      },
      error => {
        console.log(error);
      }
    );
  }


}
//This code retrieves the playlists using the getPlaylists() method from the PlaylistService and assigns the returned data to the playlists array in the component.






