import { Route, Routes } from 'react-router-dom';
import TopBar from './Components/TopBar';
import Home from './Pages/Home';
import Posts from './Pages/Posts';

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/posts' element={<Posts />}></Route>
      </Routes>
    </>
  );
}

export default App;
