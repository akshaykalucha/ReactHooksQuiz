function mapStateToProps(state){
    return {
        genreReducer: state.Genre,
        levelReducer: state.level
    }
}

// export class Index extends Component {
//     render() {
//         return (
//             <div>
//                 <Router>
//                     <Switch>
//                         <Route path="/" exact component={QuizStart} />
//                         <Route path="/quiz" exact component={Quiz} />
//                     </Switch>
//                 </Router>
//             </div>
//         )
//     }
// }