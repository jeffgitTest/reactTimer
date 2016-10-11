var Expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', ()=>{
  it('Should exists', ()=>{
    Expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered',()=>{
    var jeffSpy = Expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={jeffSpy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.valSec.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    Expect(jeffSpy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered',()=>{
    var jeffSpy = Expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={jeffSpy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.valSec.value = 'a';
    TestUtils.Simulate.submit($el.find('form')[0]);

    Expect(jeffSpy).toNotHaveBeenCalled();
  });
});
