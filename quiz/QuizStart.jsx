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
    redirect: false,
    quizDic: []
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
        var Question = this.state.quizDic
        var Questionlist = {}
        var QuestionArray = ["What is capital of india", "Who is prime minister", "What is our national bird", "Who is iron man of india"]
        var AnswerArray = [["New delhi", "Mumbai", "Kolkata"], ["Modi", "Gandhi", "Nehru"], ["Pegion", "Parrot", "Peacock"], ["Bose", "Sardar patel", "Gandhi"]]
        let i
        for(i=0; i<QuestionArray.length; i++){
            var Question = QuestionArray[i]
            Object.assign(Questionlist, {Question: Question})
        }
        for(i=0; i<AnswerArray.length; i++){
            var answerobj = AnswerArray[i]
            let answerObj = {}
            const obj = answerobj.map((list, index) => {
                Object.assign(answerObj, {op: index+1, list, b: index+1})
                var optionlist = []
                console.log(answerObj)
                
                optionlist.push(answerObj)
            })

        }
        setTimeout(() => this.setState({ redirect: true }), 8000);

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
