import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlistsUrl = 'http://localhost:3000/api/playlists';

  constructor(private http: HttpClient) { }

  createPlaylist(songs: any[], mood: string): Observable<any> {
    const playlist = {
      name: `Playlist created on ${new Date().toLocaleDateString()}`,
      mood: mood,
      user: 'USER_ID_HERE',
      songs: songs
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.playlistsUrl, playlist, { headers });
  }
}
