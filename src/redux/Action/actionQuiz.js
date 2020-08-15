

export const answerupdate=(id,answer)=> (dispatch,getState) => {
    console.log(getState())
        dispatch({type:"SET_ANSWER",payload:id,payload2:answer});
    
}
export const score_update=()=> (dispatch,state) => {
        state().quiz.qBank.map(check=>
       { if(check.answers[0]===check.correct)
        {let new_score=state().quiz.score;
            
            dispatch({type:"SET_SCORE",payload3:new_score});
        }}
    )
}

export const retake=()=> (dispatch) => {
    
        dispatch({type:"SET_RETAKE"});
    
}

export const responses=(id)=> (dispatch,state) => {
    let findid=state().quiz.qBank.find(find=>find.questionId===id)
    if(findid.answers.length===1){
        let new_score=state().quiz.response+1;
        dispatch({type:"SET_RESPONSE",payload4:new_score})
    }
    // (check=>{ if(check.answers.length===1)
    //     {let new_score=state().quiz.response+1;
    //         console.log(new_score)
    //         dispatch({type:"SET_RESPONSE",payload4:new_score});
    //     }})
  

}

export const history=(result,date)=> (dispatch,getState) => {
    
    console.log(result,date.slice(0,24))
        //dispatch({type:"SET_HISTORY",payload6:email,payload7:history});
}
