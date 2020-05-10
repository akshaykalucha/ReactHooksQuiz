import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class QuizStart extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        Num: '',
        Genre: "Volvo"
      }

      this.globalvar = {
          Val: this.state.Num
      }
    }

    // componentDidMount(){
    //     console.log(this.globalvar)
    // }

    componentDidUpdate(){
        this.globalvar.Val = this.state.Num
        console.log("--------------")
        console.log(this.state)
        console.log(this.globalvar)
    }
    
    
    render() {
        return (
        <div>
            <label>Please enter number of questions you want</label><br/>
            <input type="text" placeholder="..." name="Num" value={this.state.Num} onChange={e => this.setState({[e.target.name]: e.target.value})} /><br/>
            <select name="Genre" value={this.state.Genre} onChange={e => this.setState({[e.target.name]: e.target.value}) } id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <button className="otpbutton">
                <Link to={{ pathname: "/quiz", state: this.state }}>Create Quiz</Link>
            </button>    
        </div>
        )
    }
}

export default QuizStart
