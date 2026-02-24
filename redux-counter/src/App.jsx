import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, divided, increment, multiple, reset } from './features/counter/counterSlice'

function App() {

  const count = useSelector((state) => {
    return state.counter.value
  })
  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleMultiple = () => {
    dispatch(multiple(count))
  }

  const handleDivided = () => {
    dispatch(divided(2))
  }

  const handleReset = () => {
    dispatch(reset(0))
  }

  return (
    <>
      <h1 className='text-5xl font-bold text-center mt-16'>Redux Counter</h1>
      <h2 className='text-center font-bold text-4xl my-10'>{count}</h2>
      <div className='flex justify-center items-center gap-2.5'>
        <button onClick={handleIncrement} className='bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg cursor-pointer'>Increment</button>
        <button onClick={handleDecrement} className='bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg cursor-pointer'>Decrement</button>
        <button onClick={handleMultiple} className='bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg cursor-pointer'>Multiple</button>
        <button onClick={handleDivided} className='bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg cursor-pointer'>Divided</button>
        <button onClick={handleReset} className='bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg cursor-pointer'>Reset</button>
      </div>
    </>
  )
}

export default App
