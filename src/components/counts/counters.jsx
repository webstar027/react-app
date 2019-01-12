import React, {Component} from 'react';
import logo from './react-js.png'
import Counter from './counter'

class Counters extends Component{
    state = {
        counters: [
            {id:1, value:10},
            {id:2, value:20},
            {id:3, value:30},
            {id:4, value:40},
            {id:5, value:50}
        ]
    }
    handledelete = counterID => {
        const counters = this.state.counters.filter(d => d.id !== counterID)
        this.setState({counters:counters})
        console.log(counters);

    }
    handleadd = () => {
        if( this.state.counters.length >= 10 ) return;
        if( this.state.counters.length == 0){
            const id = 0;
            const value = 5;
            this.setState ({counters: [...this.state.counters, {   id:id, value:value}]});
        }else{
            const id = this.state.counters[this.state.counters.length - 1].id + 1;
            const value = this.state.counters[this.state.counters.length - 1].value + 5;
            this.setState ({counters: [...this.state.counters, {   id:id, value:value}]});
        }

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
                    <div className="row">
                        <div className="col-sm-6 text-left">
                            <button className='btn btn-default' onClick={this.handleadd}>Add more</button>
                        </div>
                        <div className="col-sm-6">

                        </div>
                        </div>
            </div>
        )
    }
}
export default Counters;