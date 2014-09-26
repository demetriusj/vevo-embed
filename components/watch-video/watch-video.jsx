/** @jsx React.DOM */

var React = require('react')
  , pellet = require('pellet')
require('./watch-video.styl')

if(!SERVER_ENV) {
  var vevoAPI = require('./data-access-layer');
  var youtube = require('jsx!react-youtube');

  var watchVideoComponent = React.createClass({
    getInitialState: function() {
      var self = this;
      vevoAPI.getPlaylist('f2e58a00-780d-4904-a1cc-0305f29425bf', function(err, data) {
        self.setState({videos:data.videos});
        self.showVideo(0)
      });

      return {video: null, index:-1, loading: true};
    },

    showVideo: function(index) {
      if(!this.state.videos[index]) {index = 0;}

      var self = this;
      vevoAPI.getVideo(this.state.videos[index].isrc, function(err, data) {
        console.log('video Data', data);
        self.setState({video:data, index: index, loading:false});
      });
    },

    next: function() {
      this.showVideo(this.state.index + 1);
    },
    render: function() {
      return (
        <div className="watchVideo-component">
          {this.state.loading?(<div className="loading">LOADING...</div>):youtube({id:"vevo-player", url:'https://www.youtube.com/watch?v='+this.state.video.youTubeId, autoplay:1})}
          <div className="logo"></div>
          <p>{this.state.video && this.state.video.title} <a onClick={this.next}>Next Video (VOTE)</a></p>
        </div>
      );
    }
  });

  (function () {
    // need to include react, assets, component
    var embedPlayer = document.createElement("div");
    document.body.appendChild(embedPlayer);
    React.renderComponent(watchVideoComponent(), embedPlayer);

  })();

}
/*
(function() {
  function a(u) {var h = document.head || document.getElementsByTagName('head')[0];var s = document.createElement('script');s.type = 'text/javascript';s.charset = 'utf8';s.async = false;s.src = u;h.appendChild(s);}
  a('//cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react-with-addons.js');
  a('//localhost:3000/js/component.js');
})()
*/