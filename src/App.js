import Header from './Header';
import Headertop from './Headertop';
import Mainslider from './Mainslider';
import Events from './Events';
import Basecampreview from './Basecampreview';
import Instafeed from './Instafeed';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
function App() {
  return (
    <div className="App">
      <Headertop/>
      <Header/>
      <Mainslider/>
      <Events/>            
      <Basecampreview/>
      <Instafeed/>      
      <Footer/>
    </div>  
  );
}

export default App;