import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';  // search_bar.js  (.js doesn't have to be written)
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "";



// Create a new component.  This component shoud produce
// some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
      // shorthand for -> this.setState({videos: videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos= {this.state.videos} />  {/*Comment: pass the prop videos to VideoList*/}
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
