
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ComponentA from './component/ComponentA'
import ComponentB from './component/ComponentB'
import MyComponent from './component/MyComponent'

function App() {

  
  return (
    <Routes>
    <Route path="/" element={<ComponentA/>}/>
    <Route path="/" element={<ComponentB/>}/>
    <MyComponent/>
    </Routes>
  )
}

export default App
