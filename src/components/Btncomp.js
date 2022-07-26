import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../Redux/actions'

const Btncomp = () => {
  const [decrValue, setdecrValue] = useState(0)
  const [incrValue, setincrValue] = useState(0)
  const dispatch = useDispatch()
  return (
    <>
    <div className="buttonComponent">
      <div className="inputBtnCombine"><input className="inputForIncrDecr" value={decrValue} type="text" onChange={(e)=>{setdecrValue(e.target.value)}} /><span className="buttonForIncrDecr" onClick={()=>dispatch(decrement(parseInt(decrValue)))}>-</span></div>
      <div className="inputBtnCombine"><input className="inputForIncrDecr" value={incrValue} type="text" onChange={(e)=>{setincrValue(e.target.value)}} /><span className="buttonForIncrDecr" onClick={()=>dispatch(increment(parseInt(incrValue)))}>+</span></div>
      </div>
    </>
  )
}

export default Btncomp