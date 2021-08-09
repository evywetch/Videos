import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  /* 
   =>  This function will be called as a callback function, so we make it arrow function to be able to use "this" keyword.
   => This  youtube object is a pre-configured instance of Axios
    */
  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    /*
 NOTE: We set the selectedVideo: response.data.items[0]. so that when user enter the search term, it will update the new list of video, and also update the video player in iFrame into the 1st video of the new search term
 */
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  // Will be called when the user selects the video
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  /*
   => The comonentDidmount() will go ahead and attempt to make some default search when this app component first is rendered to the screen.
   => We gonna call onTermSubmit() into comonentDidmount() coz this function handeling all the logic that doinf search and updating the state of this component. And then set the default search term to it, so that when the app first loaded, we will see the default video instantly
   */
  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  render() {
    /**
     =>  className="ui row" = elements in this div will be placed in the same row(line)
     => className="eleven wide column" = use 11 out of the default 16 columns to show video detail
     */
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
