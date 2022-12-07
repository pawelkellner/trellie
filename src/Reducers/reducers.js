function myReducer(state, action){
    if(typeof state === 'undefined'){
        state = "Ben"
        console.log(state)
        return state
    }
    if(action.type === "test"){
        state = action.payload
    }
    return state
    
}

export default myReducer;