import React, {Component} from 'react';


class Helper extends Component{
    static defaultProps = {
        options : ['angry','anchor','archive','baby']
    }
    constructor(props){
        super(props)
        this.state = { icons : [] }
        this.addIcon = this.addIcon.bind(this)
    }
    addIcon(){
        let rand = Math.floor(Math.random()*this.props.options.length)
        let newIcon = this.props.options[rand]
        let icn = this.state.icons
        icn.push(newIcon)
        this.setState({icons : icn})
    }

    render(){
        const icon = this.state.icons.map(i=> <i className={`fas fa-${i}`}/>)
        return(
            <div>
                <h1>Icon is : {icon} </h1>
                <button onClick={this.addIcon}>Add Icons</button>
            </div>
        )
    }
}

export default Helper