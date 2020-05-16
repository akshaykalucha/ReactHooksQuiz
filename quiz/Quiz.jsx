import React, { useState, useEffect } from 'react'
// import styles from './Quiz.modules.css'
import { connect } from 'react-redux'
import * as actionTypes from '../quiz/Store/actions'



let Nresult = 0

function getResult(arr1, arr2) {
        
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] ===  arr2[i]){
            Nresult ++
        }
    }
    return Nresult
}

function Quiz(props) {

    const [Questions, setQuestios] = useState()
    // const [Questions, setQuestios] = useState([
    //     {
    //         Question: "What is capital of india",
    //         Options: [ { op1: "New delhi", b:1 }, { op2: "Mumbai", b:2}, { op3: "Kolkata", b:3}],
    //         Akey: 1,
    //         key: 1,
    //         isAnswered: false,
    //         isNext: true
    //     },
    //     {
    //         Question: "Who is prime minister",
    //         Options: [ { op1: "Modi", b:1},  { op2: "Gandhi", b:2},  { op3: "Nehru", b:3}],
    //         Akey: 1,
    //         key: 2,
    //         isAnswered: false,
    //         isNext: false
    //     },
    //     {
    //         Question: "What is our national bird",
    //         Options: [ { op1: "Pegion", b:1}, { op2: "Parrot", b:2}, {  op3: "Peacock", b:3}],
    //         Akey: 3,
    //         key: 3,
    //         isAnswered: false,
    //         isNext: false
    //     },
    //     {
    //         Question: "Who is iron man of india",
    //         Options: [ { op1: "Bose", b:1}, { op2: "Sardar patel", b:2}, { op3: "Gandhi", b:3}],
    //         Akey: 2,
    //         key: 4,
    //         isAnswered: false,
    //         isNext: false
    //     },
    // ])

    const [Allanswered, setAllAnswered] = useState(false)
    const [result, setResult] = useState(0)
    const [userans, setuserns] = useState([])
    const [checkResult, setCheckResult] = useState(false)


    useEffect(() => {
        const quesArray = props.location.state
        function callLoop(){
            for (let i = 0; i<quesArray.length; i++){
                quesArray[i]["isAnswered"] = false
                if(i===0){
                    quesArray[i]["isNext"] = true
                }else{
                    quesArray[i]["isNext"] = false
                }
            }
        }
        function pakka(){
            setQuestios(quesArray)
        }
        callLoop()
        pakka()
    }, [props])


    const AnswerKey = [1, 1, 3, 2]





    // useEffect(() =>{
    //     setCheckResult(true)
    // }, [getResult])

    if(Allanswered === true){
        console.log('finished')
    }

    const check = (e) => {
        setResult(Nresult)
        setCheckResult(true)
        props.onSayHi(Nresult)
    }
    
    const handlechange = (e, index) => {

        if (Questions.length === index+1){
            setAllAnswered(true)
            console.log(e.currentTarget.innerText)
            let newArr = [...Questions]
            newArr[index].isAnswered = true; // replace e.target.value with whatever you want to change it to
            newArr[index].isNext = false;
            setQuestios(newArr);
            let optiontext = e.currentTarget.innerText
            let bkey
            Questions.map(Question => Question.Options.map(function(option){
                if(option.op1===optiontext){
                    bkey = option.b
                }else if(option.op2 === optiontext){
                    bkey = option.b
                }else if(option.op3 === optiontext){
                    bkey = option.b
                }
                return bkey
            }))
            let userlist = [...userans]
            userlist.push(parseInt(bkey))
            setuserns(userlist)
            // console.log(userlist, AnswerKey)
            console.log(getResult(userlist, AnswerKey), 'your result is')
            return
        }

        let bkey
        let newArr = [...Questions]; // copying the old datas array
        newArr[index].isAnswered = true; // replace e.target.value with whatever you want to change it to
        newArr[index].isNext = false;
        let optiontext = e.currentTarget.innerText
        Questions.map(Question => Question.Options.map(function(option){
            if(option.op1===optiontext){
                bkey = option.b
            }else if(option.op2 === optiontext){
                bkey = option.b
            }else if(option.op3 === optiontext){
                bkey = option.b
            }
            return bkey
        }))

        // newArr[index+1].isNext = true
        // let userlist = [...userans]
        // userlist.push(parseInt(bkey))
        // setuserns(userlist)
        // console.log(userlist)
        // setQuestios(newArr);
    }



    if(Allanswered === false && Questions){
        return(
            Questions.map((Question, index) => Question.isAnswered === false && Question.isNext === true ? <div key={Math.random() *10}>
            <div key={Math.random() *10}>{Question.Question}
            <div>
             {Question.Options.map(option => 
                <button data-bbkey={option.b} key={Math.random()*10} onClick={e => handlechange(e, index)}>{option.op1}{option.op2}{option.op3}</button>
            )}
            </div>
            </div>
        </div> : null
        )
        )
    }


    if(Allanswered === true){
        return (
            <div>
                <button onClick={ e => check(e)}>Get result</button>
                {checkResult === true ?
                    <div key={Math.random() *10}>
                        <h1>Quiz Finished</h1>
                        <h2>Your result is: {result}</h2>
                    </div> : null
                }
            </div>
        )
    }
    else{
        return(
            <div>
            <h1>Loading....</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        hi: state.sayHi,
        price: state.myPrice
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onSayHi: (param) => dispatch({type: actionTypes.SHOW_ALERT, param})
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Quiz)
