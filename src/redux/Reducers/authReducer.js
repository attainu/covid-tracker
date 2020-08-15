let initialState = {
    users: [],
    fullname: '',
    email: '',
    isAuthenticated: false
}



const reducer = (state= initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case 'REGISTER':
            if(localStorage.getItem("users")===null){
                localStorage.setItem("users", JSON.stringify([action.payload]));
            }
            else
            {let fetchuser=JSON.parse(localStorage.getItem("users"))
            stateCopy.users = [...fetchuser, action.payload]
            localStorage.setItem("users", JSON.stringify(stateCopy.users));}
            return stateCopy;
        case 'LOGIN':
            let { fullname, email , isAuthenticated} = action.payload;
            stateCopy.fullname = fullname;
            stateCopy.email = email;
            stateCopy.isAuthenticated = isAuthenticated;
            console.log(stateCopy)
           
            return stateCopy;
        case 'LOGOUT':
            let { fullname1, email1 , isAuthenticated1} = action.payload;
            stateCopy.fullname = fullname1;
            stateCopy.email = email1;
            stateCopy.isAuthenticated = isAuthenticated1;
            
            return stateCopy;

        default:
            return stateCopy;
    }
}

export default reducer; 