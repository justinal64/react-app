import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {a: ''}
    }
    update(e) {
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value,
            c: this.refs.c.value
        })
    }
    render(){
        return (
            <div>
                <center>
                    <h3>What verse would you like to look up?</h3>
                    <span>Book:</span>
                    <select ref="a" onChange={this.update.bind(this)}>
                        <option value="Genesis">Genesis</option>
                        <option value="Exodus">Exudus</option>
                        <option value="Lev">Lev</option>
                        <option value="Numbers">Numbers</option>
                    </select> {this.state.a}
                    <span>Chapter:</span>
                    <select ref="b" onChange={this.update.bind(this)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select> {this.state.b}
                    <span>Verse:</span>
                    <select ref="c" onChange={this.update.bind(this)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                    </select> {this.state.c}
                    <hr />
                    <textarea rows="10" cols="30" placeholder="Leave a Comment Please"></textarea>
                </center>
            </div>
        )
    }
}

export default App
