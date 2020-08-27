import React, { Component } from 'react';
import './App.css';
import AddForm from './AddForm/AddForm';
import Clock from './Clock/Clock';

export default class App extends Component {

  state = {
    clocks: [],
    name: '',
    timeZone: '',
  };


  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      this.setState(prevState => ({ ...prevState, [name]: value }));
    }
    if (name === 'timeZone') {
      this.setState(prevState => ({ ...prevState, [name]: value }));
    }
  };

  onSubmit = (e) => {
    const { name, timeZone } = this.state;

    e.preventDefault();
    name && timeZone && this.setState(prevState => {
      const { clocks, name, timeZone } = prevState;

      return { ...prevState, clocks: [...clocks, { name, timeZone }], name: '', timeZone: '' };
    });
  };

  onRemove = (id) => {
    this.setState(prevState => {
      const { clocks } = prevState;
      const currentClocks = clocks.filter((clock, i) => i !== id);

      return { ...prevState, clocks: currentClocks };
    });
  };


  render() {
    const { clocks } = this.state;
    return (
      <div>
        <AddForm
          onChange={this.handleChange}
          values={this.state}
          onSubmit={this.onSubmit}
        />
        {clocks && clocks.map((clock, idx) => (
          <Clock
            key={idx}
            {...clock}
            timeZone={Number(clock.timeZone)}
            onRemove={() => this.onRemove(idx)}
          />
        ))}
      </div>
    );
  }

}
