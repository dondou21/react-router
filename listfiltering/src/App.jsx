import { useCallback, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [filter, setFilter] = useState('')

  // Add element to array using useMemo
  

  const items = useMemo(() => {
    const arr = [];
    for(let i = 1; i <= 1000; i++)
    {
      arr.push({id: i, name: `Element ${i}`})
    }
    return arr;
  }, [])

  // Filtering

  const filteredList = useMemo(() => {
    return items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
  },[filter, items])

  const handleChange = useCallback((e) =>{
    e.preventDefault()
    setFilter(e.target.value)
  },[])
  

  console.log(filter)
  return (
    <>
      <h1>Array filtering</h1>


    <input 
      type="text"
      placeholder='Search element...'
      value={filter}
      onChange={handleChange} 
    />

    {/* Displaying element */}
    <h2>Element filtered: {filteredList.length} element(s) of {items.length} elements</h2>

    <ul>
      {filteredList.map((item) => (
        <li key= {item.id}>
          {item.name}
        </li>
      ))}
    </ul>
    </>
  )
}

export default App