import React, { Component } from 'react'
// import {  Redirect } from 'react-router-dom'



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


    HandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //CORE DATA STRUCTURE REPLICATION API CALL AND SETTING STATE

    crateQiuz = e => {
        this.setState({
            quizCreated: true
        })
        // var Question = this.state.quizDic
        var Questionlist = {}
        var QuesArray = []
        var QuestionArray = ["What is capital of india", "Who is prime minister", "What is our national bird", "Who is iron man of india"]
        var AnswerArray = [["New delhi", "Mumbai", "Kolkata"], ["Modi", "Gandhi", "Nehru"], ["Pegion", "Parrot", "Peacock"], ["Bose", "Sardar patel", "Gandhi"]]
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
        var result = chunkArray(option, 3);
        // console.log(result)
        let t
        for(t=0; t<QuesArray.length; t++){
            // console.log(QuesArray[t], `this question is at ${t} index`)
            QuesArray[t]["Options"] = result[t]
            QuesArray[t]["key"] = t+1
            // console.log(result[t], `this result is at ${t} index`)
        }
        console.log(QuesArray)
        // let z 
        // for(z=0; z<result.length; z++){
        //     console.log(result[z], `this result is at ${z} index`)
        // }
        // setTimeout(() => this.setState({ redirect: true }), 8000);
    }
    
    
    render() {
        const { history } = this.props;
        if(this.state.redirect){
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
