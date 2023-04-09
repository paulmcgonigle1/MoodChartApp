import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlistsUrlAPIGATEWAY = 'https://7jnqsugxj0.execute-api.eu-west-1.amazonaws.com/testing/playlists';


  constructor(private http: HttpClient) { }

 
 addPlaylist(playlistData: any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post<any>(`${this.playlistsUrlAPIGATEWAY}`, playlistData, httpOptions);
}


getPlaylists(): Observable<any[]> {
  return this.http.get<any>(this.playlistsUrlAPIGATEWAY).pipe(
    map(response => JSON.parse(response.body))
  );

  
  




}
// deletePlaylist(playlistId: string): Observable<any> {
//   return this.http.delete<any>(`${this.playlistsUrlAPIGATEWAY}/${playlistId}`);

// }
deletePlaylist(playlistId: string): Observable<any> {
  return this.http.delete<any>(`${this.playlistsUrlAPIGATEWAY}/${playlistId}`);
}
getMoods(): Observable<string[]> {
  return this.getPlaylists().pipe(
    map(playlists => {
      const moods = playlists.map(playlist => playlist.mood);
      return Array.from(new Set(moods)); // remove duplicates
    })
  );
}
//


}
