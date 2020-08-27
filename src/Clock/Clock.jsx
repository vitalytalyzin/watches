import React, { Component } from 'react';
import styled from './Clock.module.css';

export default class Clock extends Component {

  constructor(props) {
    super(props);
    this.interval = null;

  }

  state = {
    hh: null,
    mm: null,
    ss: null,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const day = new Date();
      this.setState({
        hh: day.getHours(),
        mm: day.getMinutes(),
        ss: day.getSeconds(),
      })
    })
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }

  render() {
    const { name, timeZone, onRemove } = this.props;
    const { hh, mm, ss } = this.state;
    const deg = 6;

    const transformStyles = {
      hh: `rotateZ(${((hh + timeZone) * 30) + (mm * deg/12)}deg)`,
      mm: `rotateZ(${mm * deg}deg)`,
      ss: `rotateZ(${ss * deg}deg)`,
    }

    return (
      <div className={styled.wrapper}>
        <div className={styled.name}>{name}</div>
        <div className={styled.clock}>
          <div className={styled.hour}>
            <div className={styled.hr} style={{ transform: transformStyles.hh }} />
          </div>
          <div className={styled.min}>
            <div className={styled.mn} style={{ transform: transformStyles.mm }} />
          </div>
          <div className={styled.sec}>
            <div className={styled.sc} style={{ transform: transformStyles.ss }} />
          </div>
        </div>
        <button onClick={onRemove}>x</button>
      </div>
    );
  }

};
