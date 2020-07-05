import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.handleName=this.handleName.bind(this);
    this.handleLastName=this.handleLastName.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {
      "first-name":"",
      "last-name":"",
      list:[],
    }
  }

  handleName(event){

    this.setState({
      'first-name': event.target.value,
    }, ()=>{console.log(this.state["first-name"])})
  }

  handleLastName(event){
    this.setState({
      'last-name': event.target.value,
    }, ()=>{console.log(this.state["last-name"])})

  }

  handleSubmit(event){
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
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombrex</label>
                <input type="text" value={this.state["first-name"]} onChange={this.handleName} className="form-control" name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" value={this.state["last-name"]} onChange={this.handleLastName} className="form-control" name="last-name" />
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


