import React, { Component } from 'react';

export class YourShortcut extends Component {
  render() {
    return (
      <div className="input-append">
          <legend>
              <i className='icon'></i>
              <span>Your Shortcut</span>
          </legend>
          <span className="help-block">
            { this.props.url }
          </span>
          <input className="span2" type="text"
            value={ this.props.shortcut } readOnly/>
        </div>
    );
  }
}
/*
var YourShortcut = React.createClass({

  render: function() {
    window.console.log(this)

    return (
      <div className="input-append">
          <legend>
            Your Shortcut
          </legend>
          <span className="help-block">
            { this.props.url }
          </span>
          <input className="span2" type="text"
            value={ this.props.shortcut } readOnly/>
        </div>
    );

  }
});

export default YourShortcut;*/
