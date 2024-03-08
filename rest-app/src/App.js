// mftndatabaseinsupabase

import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './layout/Header';
import AppRouter from './router/AppRouter';


function App() {
 
  
  
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
