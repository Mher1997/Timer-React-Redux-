import React from 'react';
import { connect } from 'react-redux';
import IntervalComponent from './IntervalComponent';
import { changeButton } from './action';

class TimerComponent extends React.Component {

  state = {
    currentTime: 0,
    buttonBlock : false,
  }

  handleStart = () => {
    this.setState({buttonBlock : true});
    this.props.changeButton(true);
    this.handle = setInterval ( () => this.setState({
      currentTime : this.state.currentTime + 1
    }), this.props.currentInterval * 1000)
  }
 
  handleStop = () => {
    clearInterval(this.handle);
    this.props.changeButton(false);
    this.setState({
      currentTime: 0,
      buttonBlock : false,
    })
  }

  componentWillUnmount(){
    clearInterval(this.handle);
  }
 
  render() {
    const {buttonBlock, currentTime} = this.state;

    return (
      <div>
        <IntervalComponent />
        <div>
          Секундомер: {currentTime} сек.
        </div>
        <div>
          <button onClick={this.handleStart} disabled={buttonBlock}>Старт</button>
          <button onClick={this.handleStop} disabled={!buttonBlock}>Стоп</button>
        </div>
      </div>
    )
  }
}

  const mapStateToProps = state => ({currentInterval : state.reducer.interval});

  const mapDispatchToProps = {
      changeButton,
  }

  export default connect(mapStateToProps, mapDispatchToProps)(TimerComponent);