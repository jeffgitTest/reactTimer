var React = require('react');


var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var secString = this.refs.valSec.value;
    if(secString.match(/^[0-9]*$/)){
      this.refs.valSec.value = '';
      this.props.onSetCountdown(parseInt(secString, 10));
    }
  },
  render: function(){
    return(
      <div>
        <form ref='form' onSubmit={this.onSubmit} className="countdown-form">
          <input type='text' ref='valSec' placeholder='Enter time in Seconds'/>
          <button className='button expanded'>Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
