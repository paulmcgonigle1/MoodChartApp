export const environment = {
    production: false,
    
    clientId: 'c4cd5531ce004764a2ef3a24bcb776b4',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    redirectUrl: 'https://moodchartapp-production.up.railway.app/home',
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