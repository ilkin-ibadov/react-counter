import { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [incrementClicked, setIncrementClicked] = useState(false)
  const [decrementClicked, setDecrementClicked] = useState(false)

  useEffect(() => {
    setCount(prevState => prevState + 10)
  }, [incrementClicked])

  useEffect(() => {
    setCount(prevState => prevState - 10)
  }, [decrementClicked])

  return (
    <div className='flex gap-5 m-5 items-center'>
      <button className='bg-red-700 text-white p-3 h-fit' onClick={() => {
        // setDecrementClicked(prevState => !prevState)
        setCount(prevState => prevState - 10)
      }}>Decrement by 10</button>

      <button onClick={() => {
        setCount(prevState => prevState - 1)
      }} className='bg-blue-700 rounded-full text-white p-4'>-</button>

      <div className='text-5xl mb-5'>{count}</div>

      <button onClick={() => {
        setCount(prevState => prevState + 1)
      }} className='bg-blue-700 rounded-full text-white p-4'>+</button>

      <button className='bg-green-700 text-white p-3 h-fit' onClick={() => {
        // setIncrementClicked(prevState => !prevState)
        setCount(prevState => prevState + 10)

      }}>Increment by 10</button>
    </div>
  )
}

export default App