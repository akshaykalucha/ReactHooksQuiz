import React, { Component } from 'react'
import {  Redirect } from 'react-router-dom'
import {connect} from "react-redux";
import * as actionTypes from '../quiz/Store/actions'

class QuizStart extends Component {
    
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
    redirect: null,
    quizDic: null,
    hi: this.props.levelReducer
    }

    globalvar = {
        Genre: this.state.Genre
    }
    

    componentDidMount(){
        // console.log(this.props)
    }


    HandleChange = (event) => {
        this.setState({
            hi: this.props.levelReducer
        })
        this.setState({
            [event.target.name]: event.target.value,
        })
        this.props.changeQuiz(event.target.value)
        console.log(this.props.levelReducer, 'from')
    }


    setStateQuiz = (array) => {
        this.setState({
            quizDic: array
        })
        // console.log(this.state, 'this is final state')
    }

    //CORE DATA STRUCTURE REPLICATION API CALL AND SETTING STATE

    crateQiuz = e => {
        this.setState({
            quizCreated: true
        })
        console.log(this.state)
        // var Question = this.state.quizDic
        var Questionlist = {}
        var QuesArray = []
        var QuestionArray
        var AnswerArray
        var CivicsQuestionArray = ["What is capital of india", "Who is prime minister", "What is our national bird", "Who is iron man of india"]
        var CivicsAnswerArray = [["New delhi", "Mumbai", "Kolkata"], ["Modi", "Gandhi", "Nehru"], ["Pegion", "Parrot", "Peacock"], ["Bose", "Sardar patel", "Gandhi"]]
        var ScienceQuestionArray = ["What is capital of india", "Who is prime minister", "What is our national bird", "Who is iron man of india"]
        var ScienceAnswerArray = [["New delhi", "Mumbai", "Kolkata"], ["Modi", "Gandhi", "Nehru"], ["Pegion", "Parrot", "Peacock"], ["Bose", "Sardar patel", "Gandhi"]]
        var HistoryQuestionArray = ["What is capital of india", "Who is prime minister", "What is our national bird", "Who is iron man of india"]
        var HistoryAnswerArray = [["New delhi", "Mumbai", "Kolkata"], ["Modi", "Gandhi", "Nehru"], ["Pegion", "Parrot", "Peacock"], ["Bose", "Sardar patel", "Gandhi"]]
        var GKQuestionArray = ["What is capital of india", "Who is prime minister", "What is our national bird", "Who is iron man of india"]
        var GKAnswerArray = [["New delhi", "Mumbai", "Kolkata"], ["Modi", "Gandhi", "Nehru"], ["Pegion", "Parrot", "Peacock"], ["Bose", "Sardar patel", "Gandhi"]]
        var Answers = [1,1,3,2]

        if(this.state.Genre==="GK"){
            QuestionArray = GKQuestionArray
            AnswerArray = GKAnswerArray
        }else if(this.state.Genre==="Science"){
            QuestionArray = ScienceQuestionArray
            AnswerArray = ScienceAnswerArray
        }else if(this.state.Genre==="Civics"){
            QuestionArray = CivicsQuestionArray
            AnswerArray = CivicsAnswerArray
        }else if(this.state.Genre==="History"){
            QuestionArray = HistoryQuestionArray;
            AnswerArray = HistoryAnswerArray;
        }else{
            QuestionArray = GKAnswerArray;
            AnswerArray = GKAnswerArray
        }

        let i
        for(i=0; i<QuestionArray.length; i++){
            // for(let j = 0; i<AnswerArray.length; j++){
            // console.log(QuestionArray[i])
            let k = {
                Question: QuestionArray[i],
                // Options: AnswerArray[i]
            }
            Questionlist = k
                // Questionlist["Options"] = AnswerArray[i]
            QuesArray.push(Questionlist)
            // }   
        }
        let option = []
        let j
        for(j=0; j<AnswerArray.length; j++){
            let k =  AnswerArray[j]
            // console.log(k)
            // let j
            for(i=0; i<k.length; i++){
                let options = `op${i+1}`
                let newoption = {
                    [options]: k[i],
                    b: i+1
                }
                option.push(newoption)
            }
            
        }
        function chunkArray(myArray, chunk_size){
            var index = 0;
            var arrayLength = myArray.length;
            var tempArray = [];
            
            for (index = 0; index < arrayLength; index += chunk_size) {
                let myChunk = myArray.slice(index, index+chunk_size);
                // Do something if you want with the group
                tempArray.push(myChunk);
            }
        
            return tempArray;
        }

        // console.log(option.length/QuestionArray.length, 'Divided')
        var result = chunkArray(option, option.length/QuestionArray.length);
        // console.log(result)
        let t
        for(t=0; t<QuesArray.length; t++){
            // console.log(QuesArray[t], `this question is at ${t} index`)
            QuesArray[t]["Options"] = result[t]
            QuesArray[t]["key"] = t+1
            QuesArray[t]["Akey"] = Answers[t]
            // console.log(result[t], `this result is at ${t} index`)
        }
        // console.log(QuesArray)
        // let z 
        // for(z=0; z<result.length; z++){
        //     console.log(result[z], `this result is at ${z} index`)
        // }
        setTimeout(() => this.setState({ redirect: true }), 2000);

        this.setStateQuiz(QuesArray)
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            console.log(this.state, 'this state is redirecting')
          return <Redirect to={{
            pathname: '/quiz',
            state: this.state.quizDic
        }} />
        }
      }
    
    render() {
        // const { history } = this.props;
        // if(this.state.redirect){
        //     history.push({
        //         pathname: '/quiz',
        //         state: this.state.quizDic
        //       })
        // }
        return (
        <div>
            {this.props.levelReducer}<br/>
            {this.renderRedirect()}
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
            {this.state.quizCreated ?
                <h2>loading...</h2>
                :
                <div>
                    <select name="Genre" value={this.state.Genre} onChange={e => this.setState({[e.target.name]: e.target.value}) } id="cars">
                        <option value="GK">GK</option>
                        <option value="Science">Science</option>
                        <option value="History">History</option>
                        <option value="Civics">Civics</option>
                    </select>
                    <button onClick={this.crateQiuz} className="otpbutton">
                        Create Quiz
                        {/* <Link to={{ pathname: "/quiz", state: this.state }}>Create Quiz</Link> */}
                    </button>
                </div>
            }    
        </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        changeQuiz: (value) => dispatch({type: actionTypes.CREATE_QUIZ, param: value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizStart)
