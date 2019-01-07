import React, {Component} from 'react';
import logo from './react-js.png'
import Counter from './counter'

class Counters extends Component{
    state = {
        counters: [
            {id:1, value:1},
            {id:2, value:2},
            {id:3, value:3},
            {id:4, value:4},
            {id:5, value:5}
        ]
    }
    handledelete = counterID => {
        const counters = this.state.counters.filter(d => d.id !== counterID)
        this.setState({counters:counters})
        console.log(counters);

    }
    render() {

        console.log('props', this.props);
        return(
            <div className = 'container'>
                <div className="row justify-content-center">
                    <div className="col-sm-6 text-center">
                        <img src={logo} className='logo' alt="logo"/>
                    </div>
                    <div className="col-sm-6"></div>
                </div>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value} onDelete={this.handledelete} selected={true} id={counter.id}>
                        <h4>Counter #{counter.id}</h4>
                    </Counter>)}
            </div>
        )
    }
}
export default Counters;