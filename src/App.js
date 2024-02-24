
import './App.css';
import routs from './routs';
import { useRoutes } from 'react-router-dom';

function App() {
const router=useRoutes(routs)

  return (
    <>
    {router}
    </>
  )
}

export default App;
