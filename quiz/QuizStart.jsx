import React, { Component } from 'react'
import {  Redirect } from 'react-router-dom'



export class QuizStart extends Component {
    
// constructor(props) {
//     super(props)

//     this.state = {
         
//     }
    //   this.radioChange = this.radioChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
// }


    state = {
    Genre: "GK",
    level: 'Easy',
    quizCreated: false,
    redirect: false
    }

    globalvar = {
        Genre: this.state.Genre
    }
    

    componentDidMount(){
        console.log(this.props)
    }

    componentDidUpdate(){
        this.globalvar.Val = this.state.Num
        console.log("--------------")
        console.log(this.state)
        // console.log(this.globalvar)
    }

    HandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    crateQiuz = e => {
        this.setState({
            quizCreated: true
        })
        setTimeout(() => this.setState({ redirect: true }), 200);

    }
    
    
    render() {
        const { history } = this.props;
        if(this.state.redirect){
            // return <Redirect to={{ pathname:'/quiz', state: this.state }}/>;
            history.push({
                pathname: '/quiz',
                state: this.state
              })
        }
        return (
        <div>
            <label>Please select level of difficulty</label><br/>
            <div>
            <input type="radio" id="huey" name="level" onChange={this.HandleChange} value="Easy" defaultChecked={ true } />
             <label>Easy</label>
            </div>
            <div>
            <input type="radio" id="huey" name="level" onChange={this.HandleChange} value="Medium" checked={this.state.level === "Medium"} />
             <label>Medium</label>
            </div>            <div>
            <input type="radio" id="huey" name="level" onChange={this.HandleChange} value="Difficult" checked={this.state.level === "Difficult"} />
             <label>Difficult</label>
            </div>
            <select name="Genre" value={this.state.Genre} onChange={e => this.setState({[e.target.name]: e.target.value}) } id="cars">
                <option value="GK">GK</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Civics">Civics</option>
            </select>
            {this.state.quizCreated ?
                <h2>loading...</h2>
                :
                <button onClick={this.crateQiuz} className="otpbutton">
                    Create Quiz
                    {/* <Link to={{ pathname: "/quiz", state: this.state }}>Create Quiz</Link> */}
                </button>
            }    
        </div>
        )
    }
}

export default QuizStart
