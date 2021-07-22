// action creator
export const selectSong = (song) => {
  // returns an obj, a song
  // every action has to have a type, can have a payload
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};