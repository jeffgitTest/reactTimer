var React = require("react");

var Timer = React.createClass({
  componentDidMount: function(){
      var location = this.props.location.query.location;
      if(location && location.length > 0){
        this.valueHandler(location);
        window.location.hash = '#/';
      }
  },
  render: function(){
    return(
      <diV>
        Timer.jsx
      </diV>
    );
  }

});
module.exports = Timer;
