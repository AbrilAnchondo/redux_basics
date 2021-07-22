export const songsReducer = () => {
  // this will be a static list of song for this app
  // return s an array of song objs
  return [  
    {title: 'Ocean Eyes', duration: '3:55'},
    {title: 'Wish you were gay', duration: '4:55'},
    {title: 'Halo', duration: '2:58'},
    {title: 'Ordinary people', duration: '5:55'},
    {title: 'Single Lady', duration: '4:36'},
    {title: 'My future', duration: '3:39'},
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') { 
    return action.payload;
  }  
  return selectedSong;
}