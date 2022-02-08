import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment,reset } from './actions';

class Counter extends React.Component {
    render() {
        return (
            <>
                Counter: {this.props.state}
                <div className='button'>
                    <button onClick={() => this.props.decrement()}>-</button>
                    <button onClick={() => this.props.reset()}>Reset</button>
                    <button onClick={() => this.props.increment()}>+</button>
                </div>
            </>);
    }
}

function mapStateToProps(state) {
    return { state: state };
}

function mapDispatchToProps() {
    return { increment, decrement, reset }
}
export default connect(mapStateToProps, mapDispatchToProps())(Counter);