import { Home } from './pages/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
