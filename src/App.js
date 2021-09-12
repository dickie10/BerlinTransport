import './App.css'; 
import { useState } from 'react'; 
import { useEffect } from 'react'; 
import axios from "axios"; 
import Screen from './componets/Screen';

function App() { 
  const [posts,setposts] = useState([]);  
  const [search,setsearch] = useState('');
  useEffect(() =>{ 
    axios.get('https://v5.vbb.transport.rest/stops/nearby?latitude=52.52725&longitude=13.4123') 
      .then(res =>{ 
         console.log(res);  
         setposts(res.data)
      }) 
      .catch(err =>{ 
        console.log(err);
      })

  },[search]) 
  return (
    <div className="App">
      <h1>Berlin</h1> 
      <input type="text" value={search} onChange ={(e) =>{setsearch(e.target.value)}}></input>
      <Screen arr={posts} query={search} />
    </div>
  );
}

export default App;
