import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class QuizStart extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      this.globalvar = {
          Num: 1
      }
    }

    componentDidMount(){
        console.log(this.globalvar)
    }
    
    
    render() {
        return (
        <div>
            <button className="otpbutton">
                <Link to={{ pathname: "/quiz", state: this.globalvar }}>Create Quiz</Link>
            </button>    
        </div>
        )
    }
}

export default QuizStart
