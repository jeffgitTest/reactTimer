var React = require("react");
var Clock = require("Clock");
var Controls = require("Control");

var Timer = React.createClass({
  getInitialState: function(){
    return {
      count:0,
      countdownStatus: 'stopped'
    };
  },

  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer(this.state.count);
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },

  startTimer: function(count){
    this.timer = setInterval(()=>{
      var count = this.state.count + 1;
      this.setState({
          count: count,
        });
      },1000);
  },

  render: function(){
    var {count, countdownStatus} = this.state;
    // var renderControlArea = () =>{
    //   if(countdownStatus === 'stopped'){
    //     return<Controls countdownStatus={countdownStatus} count={count} onStatusChange={this.handleStatusChange}/>
    //   }
    // };
      // {renderControlArea()}
    return(
      <diV>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>

        <Controls countdownStatus={countdownStatus} count={count} onStatusChange={this.handleStatusChange}/>
      </diV>
    );
  }

});
module.exports = Timer;
