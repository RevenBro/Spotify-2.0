import './App.css'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {
  const code = new URLSearchParams(window.location.search).get('code')
  return code ? <Dashboard code={code}/> : <Login/>
}

export default App
