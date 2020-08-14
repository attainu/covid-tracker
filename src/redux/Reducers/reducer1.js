import logo from "../../images/download.jpg"
const initialState={
    currentCountry: [],
    dropdown: [],
    currentallCountry: [],
    isopen: false,
    toggle: false,
    countrycode: "worldwide",
    flag: logo
    
    
}

const Reducer1=(state=initialState,action)=>{
    console.log(action.payload2)
    const{type,payload,payload2}=action;
    switch(type){
        case "SET_ALL_COUNTRY":
            return {...state,currentallCountry:payload,dropdown:payload2};
        case "SET_CURRENT_COUNTRY":
            return {...state,currentCountry:payload};
        case "UPDATE":
            return {...state,countrycode:payload,flag:payload2};
        
        default:
            return state;       
    }

}

export default Reducer1;