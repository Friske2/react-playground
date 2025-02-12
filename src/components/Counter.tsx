import useCount from '../hooks/useCount'
function Counter(){
  const { count, increment, decrement } = useCount()
  return <div>
    <div>Count : {count}</div>
    <button className='btn--dark' onClick={()=> {
      increment()
    }}>+</button>
    <button className='btn--dark' onClick={()=> {
      decrement()
    }}>-</button>
  </div>
}

export default Counter