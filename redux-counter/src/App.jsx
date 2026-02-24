import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, divided, increment, multiple, reset } from './features/counter/counterSlice'
import { useEffect } from 'react'
import { fetchUsers } from './features/users/usersAPI'

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

  const { users, isLoading, isError, error } = useSelector((state) => state.users)
  console.log(users)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (!isLoading && isError) {
    return <h2>Error: {error}</h2>
  }
  if (!isLoading && users.length === 0) {
    return <h2>There is no users yet</h2>
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
        <button onClick={handleReset} className='bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg cursor-pointer'>Reset</button>
      </div>

      {/* API Data  */}
      <section className="py-12 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Top Accent Bar */}
              <div className="h-2 bg-linear-to-r from-blue-500 to-indigo-600" />

              <div className="p-6">
                {/* Header: Name & Username */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-500 italic">@{user.username}</p>
                  </div>
                  <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    ID: {user.id}
                  </span>
                </div>

                <hr className="my-4 border-gray-100" />

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2 text-indigo-500">📧</span>
                    <span className="text-sm truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2 text-indigo-500">📞</span>
                    <span className="text-sm">{user.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2 text-indigo-500">🌐</span>
                    <span className="text-sm text-blue-500 hover:underline cursor-pointer">
                      {user.website}
                    </span>
                  </div>
                </div>

                {/* Company Section */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">Company</p>
                  <h4 className="text-md font-semibold text-gray-700">{user.company.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1 italic">
                    "{user.company.catchPhrase}"
                  </p>
                </div>

                {/* Location Badge */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-xs">
                    <span className="mr-1">📍</span>
                    {user.address.city}
                  </div>
                  <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800">
                    View Profile →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
