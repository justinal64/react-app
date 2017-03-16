import React from 'react';

class App extends React.Component {
    render(){
        let txt = this.props.txt
        let cat = this.props.cat
        return (
            <div>
                <h1>txt = {txt}</h1>
                <h1>cat = {cat}</h1>
            </div>
        )
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

// Default value for txt
App.defaultProps = {
    txt: "This is the default text"
}

export default App
