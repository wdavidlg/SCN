

export const recordReducer = (state, action) => {

    switch(action.type){

        case "get":
            return {
                ...state,
                records: action.payload.records,
            }
        case "post":
            return {
                ...state,
                records: [action.payload.record, ...state.records]
            }

        case "update":
            return {
                ...state,
                records: state.records.map(item => {
                    if(item.id === action.payload.record.id){
                        return action.payload.record;
                    }
                    return item;
                })
            }

        case "delete":
            return {
                ...state,
                records: state.records.filter(item => item.id !== action.payload.id)
            }
        
        case "select": 
            return {
                ...state,
                recordSelected: action.payload.record
            }
        case "deselect":
            return {
                ...state,
                recordSelected: null
            }
        default:
            return state
    }
}