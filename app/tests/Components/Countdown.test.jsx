var React = require("react");
var ReactDOM = require("react-dom");
var Expect = require("expect");
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', ()=>{
  it('Should exists countdown component', ()=>{
    Expect(Countdown).toExist();
  });

  describe('handleSetCountdown', ()=>{
    it('Should setState to started and countdown', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(9);

      Expect(countdown.state.count).toBe(9);
      Expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(()=>{
        Expect(countdown.state.count).toBe(8);
        done();
      },1001);
    });

    it('Should never set count less than or equal to zeron',()=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);
      setTimeout(()=>{
        Expect(countdown.state.count).toBe(0);
        done();
      },3001);
    });

    it('Should pause countdown on pause status', ()=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');
      setTimeout(()=>{
        Expect(countdown.state.count).toBe(3);
        Expect(countdown.state.countdownStatus).toBe('paused');
        done();
      },1001);
    });

    it('Should stopped countdown on stopped status', ()=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');
      setTimeout(()=>{
        Expect(countdown.state.count).toBe(3);
        Expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      },1001);
    });

  });
});
