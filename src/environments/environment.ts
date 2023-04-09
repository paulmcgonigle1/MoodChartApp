export const environment = {
    production: false,

    clientId: 'c81078cdef9b4b0a9b67759341b0e85f',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    redirectUrl: 'https://moodchartapp-production-145c.up.railway.app/login',
    scopes:[
        "user-read-currently-playing", 
    "user-read-recently-played", 
    "user-read-playback-state", 
    "user-top-read", 
    "user-modify-playback-state", 
    "user-library-read", 
    "playlist-read-private", 
    "playlist-read-collaborative" 
    ]
  };