


export const authReducer = (state, action) => {

    switch(action.type){

        case "login":
            return {
                ...state, 
                status: "authenticated",
                token: action.payload.token,
                user: action.payload.user,
                error: null
            }
        case "logout":
            return {
                ...state,
                status: "not-authenticated",
                user: null,
                token: null,
                error: null
            }
        case "error":
            return {
                ...state,
                status: "not-authenticated",
                user: null,
                token: null,
                error: action.payload.error
            }
        default:
            return state;
    }

}