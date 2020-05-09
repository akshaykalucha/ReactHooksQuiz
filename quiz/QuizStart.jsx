import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


export class QuizStart extends Component {
    
    render() {
        return (
        <div>
            <Link to="/quiz">My Quiz</Link>
        </div>
        )
    }
}

export default QuizStart
