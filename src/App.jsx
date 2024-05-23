import Profile from "./assets/Components/Profile";
import Info from  "./assets/Components/Info";               

import About from  "./assets/Components/About";
import Footer from  "./assets/Components/Footer";
import Social from  "./assets/Components/Social";
import "/src/index.css";
 export default function App() {

  return (
    <>
  <div className="App">
    <div className="Container">
      <Profile/>
      <Info/>
      <About/>
      <Social/>
      <br />
      
    </div>
 
  </div>
     <Footer/>
     </>
  )
}
