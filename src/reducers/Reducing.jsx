const initialState={}
export default (state = initialState, action) => {
    console.log("action",action);
    switch (action.type) {
        case 'GETUSERS': return {
            ...state,posts: action.payload
        }
        default:return state
    }
}