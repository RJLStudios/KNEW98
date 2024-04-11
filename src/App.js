import React, {useRef} from 'react';
import './Components/App.css';
import Homepage from './Components/Homepage.js';
import Featured from './Components/Featured.js';
import Videos from './Components/Videos.js';
import Events from './Components/Events.js';
import Merch from './Components/Merch.js';
import Contact from './Components/Contact.js';
import Mailing from './Components/Mailing.js';
import Footer from './Components/Footer.js';


function App() {

  const videosRef = useRef(null);

  function scrollToComponent(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({ behaviour: "smooth" });
    }
  }
  const videoScrollToComponent = () => {
    scrollToComponent(videosRef);
  };

  return (
    <div className="App">
    <Homepage/>
    <Featured/>
    <Videos ref={videosRef}/>
    <Events/>
    <Merch/>
    <Contact/>
    <Mailing/>
    <Footer/>
    </div>
  );
}

export default App;
