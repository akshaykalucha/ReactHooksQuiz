import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Quiz from './Quiz'
import Home from './Home'


export class QuizStart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <Router>
                <div> 
                    <Link to='/quiz' color="white" clssName="is-rounded">
                        <span>My Quiz</span>
                    </Link>
                    <Switch>
                        <Route  path="/quiz" component={Quiz} />
                        </Switch>
                </div>
            </Router>
        )
    }
}

export default QuizStart


//Need to get packages