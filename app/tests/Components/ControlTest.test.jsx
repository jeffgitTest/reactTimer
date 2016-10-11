var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Expects = require('expect');
var Control = require('Control');

describe('Controls',()=>{
  it('Should exists', ()=>{
    Expects(Control).toExist();
  });

  describe('render',()=>{
    it('Should render pause when started',()=>{
      var controls = TestUtils.renderIntoDocument(<Control countdownStatus="started" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      Expects($pauseButton.length).toBe(1);
    });

    it('Should render start when paused',()=>{
      var controls = TestUtils.renderIntoDocument(<Control countdownStatus="paused" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      Expects($startButton.length).toBe(1);
    });
  });

});
