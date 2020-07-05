import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      "first-name":"",
      "last-name":"",
      list:[],
    }
  }

  handleInput = (event) => {
    console.log("Entre en el handleInput", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    }, ()=>{console.log(this.state["first-name"])})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let oldList = this.state.list;
    this.setState({
      list: [...oldList, [this.state["first-name"], this.state["last-name"]]],
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" value={this.state["first-name"]} onChange={this.handleInput} className="form-control" name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" value={this.state["last-name"]} onChange={this.handleInput} className="form-control" name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, index) => 
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                </tr>
                )}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


