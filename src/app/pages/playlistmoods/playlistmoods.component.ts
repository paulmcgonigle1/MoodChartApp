import { Component } from '@angular/core';
import { using, from } from 'rxjs';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlistmoods',
  templateUrl: './playlistmoods.component.html',
  styleUrls: ['./playlistmoods.component.scss']
})
export class PlaylistmoodsComponent {

  playlists: any[] = [];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.getPlaylists().subscribe(
      data => {
        this.playlists = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
//This code retrieves the playlists using the getPlaylists() method from the PlaylistService and assigns the returned data to the playlists array in the component.






