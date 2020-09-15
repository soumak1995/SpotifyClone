import React,{useEffect,useState}from 'react';
import './App.css';
import Login from './Login';
import { getTokenfromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player'
import {useDataLayerValue} from './DataLayer'
const spotify=new SpotifyWebApi()
function App() {

  const [{user,token,playlists,discover_weekly},dispatch]=useDataLayerValue();
  useEffect(() => {
     const hash=getTokenfromUrl();
     console.log('I have a token 🙄',hash) ;
     window.location.hash='';
     const _token=hash.access_token;
      if(_token){
       dispatch({
         type:'SET_TOKEN',
         token:_token
       });
        spotify.setAccessToken(_token);
        spotify.getMe().then(user=>{
          
          dispatch({
            type:'SET_USER',
            user
          })
        })
      spotify.getUserPlaylists().then((playlists)=>{
     
        dispatch({
          type:"SET_PLAYLISTS",
          playlists
        })
        
      }
      
      )

      spotify.getPlaylist('65ojyE4xJXBoyW0ZMKpFtS').then(response=>{
          dispatch({
            type:"SET_DISCOVER_WEEKLY",
            discover_weekly:response
          })
      })
      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );
    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });
      }
      
  }, [token, dispatch])
  console.log('👦',discover_weekly);
  console.log("app",playlists);
  return (
    
    <div className="App">
      {
        token?<Player spotify={spotify}/>:<Login/>
      }
      
    </div>
  );
}

export default App;
