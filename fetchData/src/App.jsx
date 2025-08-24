import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  },[refresh])

 
  console.log(refresh)
  return (
    <>
      <h1>Fetchin data</h1>
      <button onClick={() => setRefresh(prev => prev + 1)}> Refresh</button>

      {posts.length === 0 && <h3> Loading...</h3> }

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
