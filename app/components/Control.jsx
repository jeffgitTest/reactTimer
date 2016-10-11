var React = require("react");

var Control = React.createClass({
  propTypes: {
    countdownStatus: React.Proptypes.string.isRequired
  },

  render: function(){
    var {countdownStatus} = this.props;
    var renderStartStopButton = ()=>{
      if(countdownStatus === 'started'){
        return<button className="button secondary">Pause</button>
      }else if(countdownStatus === 'paused'){
        return<button className="button primary">Start</button>
      }
    };

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Control;
