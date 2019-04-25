import React from 'react';
import { connect } from 'react-redux';
import {changeInterval} from './action';

class IntervalComponent extends React.Component {

  state = {
    interval : 1,
  }

  setStateInterval = (value) => {
    const {interval} = this.state;
    if(interval === 1 && value === -1){
      return;
    }
    this.setState({interval : interval + value});
  }
  
  componentDidUpdate(prevProps, prevState){
    if(prevState.interval !== this.state.interval){
      this.props.changeInterval(this.state.interval);
    }
  }

  render() {
    const {interval} = this.state;
    const {buttonDisabled} = this.props;
    
    return (
      <div>
        <span>Интервал обновления секундомера: {interval} сек.</span>
        <span>
          <button 
            onClick={() => this.setStateInterval(-1)}
            disabled={interval===1 || buttonDisabled}>-
          </button>
          <button 
            onClick={() => this.setStateInterval(1)} 
            disabled={buttonDisabled}>+
          </button>
        </span>
      </div>
    )
  }
}

  const mapStateToProps = state => ({buttonDisabled : state.reducer.button});
  
  const mapDispatchToProps = {
    changeInterval,
  }

  export default connect(mapStateToProps, mapDispatchToProps)(IntervalComponent);
  