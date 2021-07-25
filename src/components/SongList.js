import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderSongs () {
    return this.props.songs.map(song => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button className='ui button primary'>Select</button>
          </div>
          <div className='content'>
             {song.title}
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='ui divided list'>{this.renderSongs()}</div>
    )
  }
}

const mapStateToProps = (state) => {
//returning an obj that will show up as props inside songList component
  return { songs: state.songs };
}
export default connect(mapStateToProps)(SongList);

// This is how the react-redux library works, always:
// Import connect component at the top
// Call connect passing the component as the second function call
// Define mapStateToProps, which always gets a first arg of state
// Return obj that shows up as props inside of the component
