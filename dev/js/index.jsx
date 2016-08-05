import "../style/style.css"
import React, { Component } from 'react';
import { render } from 'react-dom'
import { ServicesUrl } from '../js/commons/ServicesUrl.jsx'
import { YourShortcut } from '../js/components/YourShortcut.jsx'

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
        url: undefined,
        shortcut: undefined
    }
  }

  createUrl(e) {
    var _this = this;
    var url = this.refs.url_input.value;

    if(url)
      $.post( ServicesUrl + '/urls/create', { url:url } , function(data){
        console.log('success!')
        console.log(data);

        _this.refs.url_input.value = ''

        _this.setState({
          url: url ,
          shortcut: ServicesUrl + '/urls/' + data.shortcut.id
        })

      }, 'json').fail(function(err){
        console.log('err!')
        console.log(err);
      });
  }

  render() {
    return ( <div className='col-md-12'>

      <div className='input-append'>
        <legend>
          <span>Your URL</span>
        </legend>
        <input className='span2' type='text'
            maxLength='2000' ref='url_input' autoFocus/>
        <button className='btn' type='button'
          onClick={ (e) => this.createUrl(e) }>
            Go!
        </button>
      </div>

      { this.state.shortcut ?
        <YourShortcut
            url={ this.state.url }
            shortcut={ this.state.shortcut }/>
        : null }

    </div> );
  }
}

render(
  <IndexPage />,
  document.getElementById('content')
);
