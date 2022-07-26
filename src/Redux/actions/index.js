export const increment=(incrNum)=>{
    return(
        {
            'type': 'INCR',
            'Payload': incrNum
        }
    )
}

export const decrement=(decrNum)=>{
    return(
        {
            'type': 'DECR',
            'Payload': decrNum
        }
    )
}