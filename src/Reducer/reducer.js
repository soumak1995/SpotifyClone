export const initialState={
    user:null,
    playLists:[],
    playing:false,
    item:null,
    discover_weekly:null,
    top_artists:null,
    token:null
   // token:"BQCAbXElPij-i7SviRhfCmqtMVtW_4S-k6ZafHcLzu8sr0n-XP2IJobtfELc6mGF2JAnHD35TfcZ4BtqrXRqOJK1aPU5SjWGB21stTcZmuJ3RqHGOB2oPFlQBAILiR-LVx4wOaMUnal-7AvJvMHatbbsCw0_cqwU1mu3ELx-gf46cGaB"
};
const reducer=(state,action)=>{
console.log(action)
switch(action.type){
   
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        };
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playLists:action.playlists
            }
    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly:action.discover_weekly
        };
        case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
        case "SET_SPOTIFY":
            return {
              ...state,
              spotify: action.spotify,
            };
        default:
            return state;
}

}
export default reducer