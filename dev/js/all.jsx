import "../style/style.css"
import React, { Component } from 'react';
import { render } from 'react-dom'
import { ServicesUrl } from "../js/commons/ServicesUrl.jsx"

class AllPage extends Component {
  constructor() {
    super()
    this.state = {
        shortcuts: undefined
    }
  }

  componentWillMount() {
    var _this = this;
    $.ajax({
        url : ServicesUrl + "/urls/all",
        type : "get",
        dataType:"json",
        success : function(data) {
          console.log("success!")
          console.log(data);
          _this.setState({ shortcuts: data.shortcuts });
        },
        error: function() {
          console.log("err!")
          console.log(err);
        }
    });
  }

  render() {
    return !!this.state.shortcuts && ( <div className="col-md-12">
        <table className="table">
            <tbody>

              <tr>
                <th> your shortcut </th>
                <th> original url </th>
                <th> timestamp </th>
              </tr>

              {
                this.state.shortcuts.map(function (shortcut) {
                  return (
                    <tr key={ shortcut.id } >
                      <td>
                        <i className='icon'></i>
                        <span> { ServicesUrl + "/urls/" + shortcut.id } </span>
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
