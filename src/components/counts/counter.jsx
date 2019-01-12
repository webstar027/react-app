import React, {Component} from 'react';
import './counter.css';

class Counter extends Component {
    state = {
        count:this.props.value,
        imageURL: 'https://picsum.photos/300',
        tags:['tag1', 'tag2', 'tag3', 'tag4']
    }
    style = {
        fontSize:20,
        fontWeight:400,
    }
    liststyle ={
        listStyle:'none'
    }

    render() {
        return (
                <div className='row justify-content-center align-items-center'>
                    {/*<div className="col-12">{this.props.children}</div>*/}
                    <div className="col-sm-6">
                        <div className="row justify-content-center align-items-center">
                            <div className='col-3 text-center'>
                                <span style={this.style} className={this.getbadgetclasses()}>{this.formatcount()}</span>
                            </div>
                            <div className='col-3 text-center'>
                                <button onClick={this.clickreduce} className='btn btn-info btn-large'>-</button>
                            </div>
                            <div className='col-3 text-center'>
                                <button onClick={() => this.clickincrease({id:1})} className='btn btn-success btn-large'>+</button>
                            </div>
                            <div className='col-3 text-center'>
                                <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger btn-large'>delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6"></div>

                </div>
        );

    }

    clickincrease = () => {
        if(this.state.count >= this.props.value * 2) return this.props.value;
        this.setState({count: this.state.count + 1});

    }
    clickdelete = () => {
        console.log('delete button cicked',this.props.value);
    }
    clickreduce =() => {
        if(this.state.count <= 0) return;
        this.setState({count: this.state.count -1});

    }
    renderTags() {
        if(this.state.tags.length === 0) return <h3>There are no tags!</h3>;
        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag} style={this.liststyle}>{tag}</li>)}
            </ul>
        )
    }
    formatcount() {
        const {count} = this.state;
        return count === 0 ? "zero" : count;
    }
    getbadgetclasses() {
        let count_classes = "badge m-2 badge-";
        count_classes += (this.state.count === 0)? 'warning' : 'primary';
        return count_classes;
    }
}

export default Counter;