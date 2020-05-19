import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import QuizStart from './QuizStart'
import Quiz from './Quiz'


export class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={QuizStart} />
                        <Route path="/quiz" exact component={Quiz} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Index
