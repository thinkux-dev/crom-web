import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Layout from '../src/Layout/Layout';
import Website from '../src/pages/Website';

function App() {
  return (
    <Routes>
            <Route element={<Layout/>}>

              <Route path='/' element={<Website/>}/>

              {/* <Route path='/FAQ' element={<FAQ/>}/> */}

              {/* <Route path='/privacy/policy' element={<PrivacyPolicy/>}/> */}

              {/* <Route path='/refund/policy' element={<RefundPolicy/>}/> */}

              {/* <Route path='/about' element={<About/>}/> */}

              {/* <Route path="/forgot-password" element={<OTPInput />} /> */}

              {/* <Route path="/reset-password" element={<Reset />} /> */}
              
            </Route>
          </Routes>
  );
}

export default App;
