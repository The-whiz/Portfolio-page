import React, {Components} from 'react';
import Introduction from './Components/intro';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import W from './Components/images/W.png';


class App extends Components{
  render(){
    return(
      <div id='colorlib-page'>
        <div id='container-wrap'>
          <Sidebar></Sidebar>
          <div id='colorlib-main'></div>
          <Introduction></Introduction>
          <About></About>
          <W></W>

        </div>
      </div>
    )
  }
}

export default App;
