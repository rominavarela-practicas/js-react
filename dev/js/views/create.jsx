import $ from 'jquery';
import React, { Component } from 'react';
import { render } from 'react-dom'
import { ServicesUrl } from '../commons/ServicesUrl.jsx'

var view;

export default class CreatePage extends Component {
  constructor() {
    super();
    view = this;
    view.baseUrl = ServicesUrl + '/' + 'shortcut';
    view.state = { url: undefined, shortcut: undefined }
  }

  createUrl(e) {
    var url = view.refs.url_input.value;

    if(url)
      $.post( view.baseUrl , { url:url } , function(data){
        window.console.log('success')
        window.console.log(data)
        view.refs.url_input.value = '';
        view.setState(data);

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
          onClick={ (e) => view.createUrl(e) }>
            Go!
        </button>
      </div>

      { view.state.id ?
        <div className="input-append">
            <legend>
                <i className='icon'></i>
                <span>Your Shortcut</span>
            </legend>
            <span className="help-block">
              { view.state.url }
            </span>
            <input className="span2" type="text"
              value={ ServicesUrl + '/' + view.state.id } readOnly/>
          </div>
        : null }

    </div> );
  }
}

/*render(
  <CreatePage />,
  document.getElementById('content')
);*/
