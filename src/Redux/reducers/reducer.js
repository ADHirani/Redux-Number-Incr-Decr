const initialState = 0;

export const changeNumber=(state=initialState, action)=>{
    switch (action.type) {
        case 'INCR':
            return state=state+action.Payload;
        case 'DECR':
            return state=state-action.Payload;
        default:
            return state;
    }
}