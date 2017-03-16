import React from 'react';

class App extends React.Component {
    // super gives us access to the keyword 'this'
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }
    }
    // custom state on our component
    update(e) {
        this.setState({txt: e.target.value})
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)}/>
                <h1>{this.state.txt} - {this.state.cat}</h1>
            </div>
        )
    }
}

export default App
