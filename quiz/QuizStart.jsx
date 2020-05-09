import React, { Component } from 'react'
import { Link } from 'react-router-dom'


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
