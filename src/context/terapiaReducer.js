

export const terapiaReducer = (state, action) => {

    switch(action.type){

        case "get":
            return {
                ...state,
                terapias: action.payload.terapias,
            }
        case "post":
            return {
                ...state,
                terapias: [action.payload.terapia, ...state.terapias]
            }

        case "update":
            return {
                ...state,
                terapias: state.terapias.map(item => {
                    if(item.id === action.payload.terapia.id){
                        return action.payload.terapia;
                    }
                    return item;
                })
            }

        case "delete":
            return {
                ...state,
                terapias: state.terapias.filter(item => item.id !== action.payload.id)
            }
        
        case "select": 
            return {
                ...state,
                terapiaSelected: action.payload.terapia
            }
        case "deselect":
            return {
                ...state,
                terapiaSelected: null
            }
        default:
            return state
    }
}