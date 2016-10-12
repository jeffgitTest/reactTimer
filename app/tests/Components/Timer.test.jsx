var React = require("react");
var ReactDOM = require("react-dom");
var Expect = require("expect");
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', ()=>{
  it('should exists',()=>{
    Expect(Timer).toExist();
  });

  it('should start timer on started status', (done) =>{
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');
    Expect(timer.state.count).toBe(0);

    setTimeout( ()=>{
      Expect(timer.state.countdownStatus).toBe('started');
      Expect(timer.state.count).toBe(1);  
      done();
    },1001);
  });

  it('Should pause timer on pause status', ()=>{
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleSetCountdown(3);
    timer.handleStatusChange('paused');
    setTimeout(()=>{
      Expect(timer.state.count).toBe(3);
      Expect(timer.state.countdownStatus).toBe('paused');
      done();
    },1001);
  });

  it('Should stopped timer on stopped status', ()=>{
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleSetCountdown(3);
    timer.handleStatusChange('stopped');
    setTimeout(()=>{
      Expect(timer.state.count).toBe(3);
      Expect(timer.state.countdownStatus).toBe('stopped');
      done();
    },1001);
  });

});
