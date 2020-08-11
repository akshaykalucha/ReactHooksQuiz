function mapStateToProps(state){
    return {
        genreReducer: state.Genre,
        levelReducer: state.level
    }
}