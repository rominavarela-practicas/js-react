import "../style/style.css"
import React, { Component } from 'react';
import { render } from 'react-dom'
import { ServicesUrl } from "../js/commons/ServicesUrl.jsx"

var view;

class AllPage extends Component {
  constructor() {
    super();
    view = this;
    view.baseUrl = ServicesUrl + '/' + 'shortcut';
    view.state = { shortcuts: undefined };
  }

  componentWillMount() {
    $.ajax({
        url : view.baseUrl,
        type : "get",
        dataType:"json",
        success : function(data) {
          console.log("success!")
          console.log(data);
          view.setState({ shortcuts: data });
        },
        error: function(err) {
          console.log("err!")
          console.log(err);
        }
    });
  }

  render() {
    return !!view.state.shortcuts && ( <div className="col-md-12">
        <table className="table">
            <tbody>

              <tr>
                <th> your shortcut </th>
                <th> original url </th>
                <th> timestamp </th>
              </tr>

              {
                view.state.shortcuts.map(function (shortcut) {
                  return (
                    <tr key={ shortcut.id } >
                      <td>
                        <i className='icon'></i>
                        <span> { ServicesUrl + '/' + shortcut.id } </span>
                      </td>
                      <td>
                        <span> { shortcut.url } </span>
                      </td>
                      <td>
                        <span> { shortcut.timestamp } </span>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
        </table>

      </div> );
  }
}

render(
  <AllPage />,
  document.getElementById('content')
);
