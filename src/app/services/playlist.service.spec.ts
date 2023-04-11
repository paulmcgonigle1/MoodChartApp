import { TestBed } from '@angular/core/testing';

import { PlaylistService } from './playlist.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PlaylistService', () => {
  let service: PlaylistService; // declare the service
  let httpMock: HttpTestingController; // declare the mock HttpTestingController object

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // import HttpClientTestingModule for testing HttpClient requests
      providers: [PlaylistService] // declare the PlaylistService as a provider
    });
    service = TestBed.inject(PlaylistService); // retrieve the PlaylistService from the TestBed
    httpMock = TestBed.inject(HttpTestingController); // retrieve the HttpTestingController from the TestBed
  });

  afterEach(() => {
    httpMock.verify(); // after each test, verify that there are no outstanding Http requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // check that the PlaylistService was successfully created
  });

  it('should add a new playlist', () => {
    const playlistData = {
      name: 'My Playlist',
      mood: 'Happy',
      songs: ['Song 1', 'Song 2', 'Song 3']
    };

    service.addPlaylist(playlistData).subscribe(response => {
      expect(response).toEqual(playlistData); // check that the response from the service matches the expected data
    });

    const req = httpMock.expectOne('https://7jnqsugxj0.execute-api.eu-west-1.amazonaws.com/testing/playlists'); // expect a POST request to this URL
    expect(req.request.method).toBe('POST'); // check that the request method is 'POST'
    req.flush(playlistData); // respond to the request with the playlistData
  });

  it('should get a list of playlists', () => {
    const playlists = [
      {
        id: 1,
        name: 'My Playlist',
        mood: 'Happy',
        songs: ['Song 1', 'Song 2', 'Song 3']
      },
      {
        id: 2,
        name: 'My Other Playlist',
        mood: 'Sad',
        songs: ['Song 4', 'Song 5', 'Song 6']
      }
    ];

    service.getPlaylists().subscribe(response => {
      expect(response).toEqual(playlists); // check that the response from the service matches the expected playlists data
    });

    const req = httpMock.expectOne('https://7jnqsugxj0.execute-api.eu-west-1.amazonaws.com/testing/playlists'); // expect a GET request to this URL
    expect(req.request.method).toBe('GET'); // check that the request method is 'GET'
    req.flush({ body: JSON.stringify(playlists) }); // respond to the request with the playlists data
  });

  it('should delete a playlist', () => {
    const playlistId = '1';

    service.deletePlaylist(playlistId).subscribe(response => {
      expect(response).toBeNull(); // check that the response from the service is null
    });

    const req = httpMock.expectOne('https://7jnqsugxj0.execute-api.eu-west-1.amazonaws.com/testing/playlists/1'); // expect a DELETE request to this URL
    expect(req.request.method).toBe('DELETE'); // check that the request method is 'DELETE'
    req.flush(null); // respond to the request with a null value
  });

  it('should get a list of moods', () => {
    const playlists = [
      {
        id: 1,
        name: 'My Playlist',
        mood: 'Happy',
        songs: ['Song 1', 'Song 2', 'Song 3']
      },
      {
        id: 2,
        name: 'My Other Playlist',
        mood: 'Sad',
        songs: ['Song 4', 'Song 5', 'Song 6']
      },
      {
        id: 3,
        name: 'My Third Playlist',
        mood: 'Happy',
        songs: ['Song 7', 'Song 8', 'Song 9']
      }
    ];
//doesnt seem t work
    // service.getPlaylists = jasmine.createSpy().and.returnValue({ pipe: () => ([playlists]) });

    service.getMoods().subscribe(response => {
      expect(response).toEqual(['Happy', 'Sad']);
    });
  });
});