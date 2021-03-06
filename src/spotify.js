export const authEndpoint="https://accounts.spotify.com/authorize";
//const redirectUrl="http://localhost:3000/";
const redirectUrl="https://spotify-clone-52dd0.web.app/"
const clientId="2d23e25c840248f39b2217712a423449"
const scopes=[
    "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];
export const getTokenfromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        var parts=item.split("=");
        initial[parts[0]]=
        decodeURIComponent(parts[1]);
        return initial;

    },{});
}
export const loginUrl=`${authEndpoint}?client_id=${clientId}
&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}
&response_type=token&show_dialog=true`
  

