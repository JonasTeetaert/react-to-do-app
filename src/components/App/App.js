import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from '../List/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange(e) {
    this.setState({term: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const newItems = [...this.state.items, this.state.term];
    this.setState({
      term: '',
      items: newItems,
    });
  }

  onDelete(id) {
    const remainder = this.state.items.filter((item, i) => {
      if (i !== id) return item;
    });

    this.setState({items: remainder});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="todo-container">
          <form onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button className="btn btn--add">
              <i className="fas fa-plus" />
            </button>
          </form>
          <List items={this.state.items} onDelete={this.onDelete} />
        </div>
      </div>
    );
  }
}

export default App;
