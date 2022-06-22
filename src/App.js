import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Button } from 'antd';
import Layout from '@/pages/Layout';
import Login from '@/pages/Login';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Button type='primary'>Primary Button</Button>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
