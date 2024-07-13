import { NavLink, Route, Routes } from "react-router-dom";
import Aboutus from "./Aboutus";
//import image from './img1.webp'
import LoginPage from "./Login";
import RegistrationForm from "./Register"
import RegistrationForm1 from "./RegisterCust"
import "bootstrap/dist/css/bootstrap.css"
import "../App.css"

export default function Homepage(){
    return(
        <div className="solar-epc">
          
          <header className="solar-epc-header" style={{boxShadow: "2px 1px #888888"}}>
            <div className="navbar" >
              <div className="logo" >Sunrise Solar</div>
              <nav>
                <ul>
                  <li><NavLink to={Aboutus}>Home</NavLink></li>
                  <li><a href="#Aboutus">Aboutus</a></li>
                 
                  <li><a href="#contact">ContactUs</a></li>
                  <li ><button className="shop-now" id="loginid" ><NavLink to={'LoginPage'} style={{color:"white"}}>Login</NavLink></button></li>
                  <li><button className="shop-now" id="Regid"><NavLink to={'RegistrationForm'} style={{color:"white"}}>Register</NavLink></button></li>
                  
                  <Routes>
                  <Route exact path='LoginPage' element={<LoginPage/>}/>
                  <Route exact path='RegistrationForm' element={<RegistrationForm/>}/>
                  
                  </Routes>
                </ul>
              </nav>
            </div>
          </header>
    
          <main className="solar-epc-main">
            <section className="hero">
            
            <img src="/Rooftop Solar Home.webp" alt="Solar Image" width="100%" height="350"/>
              

            </section>
    
            <section className="intro" id="intr" style={{padding:"2rem"}}>
              <h1>Get Rooftop Solar.</h1>
              <h2>The most convenient way.</h2>
            
              <h2>
              Save Money and our Planet Earth at the same time.
              </h2>
            </section>
                    <div className="info-section" style={{ backgroundColor: 'midnightblue' ,width:'100%' ,height:'500px'}}>
                    <h1 style={{color:"white",fontFamily: "times-new-roman", marginBottom:'2rem',color:'white', paddingTop:'0.5rem'}}>How does SunriseSolar work?</h1>

<div className="row">
<div className="col-sm">
<div class="card" style={{width: "20rem",marginLeft:'4rem'}}>
              <img class="card-img-top" src="/regimg.jpeg" alt="Card image cap"/>
          <div class="card-body">
              <h2>Register to get quotes</h2>
              <p class="card-text">Register from the comfort of your home and complete your property profiled </p>
  </div>
               
</div>
</div>

<div className="col-sm">
<div class="card" style={{width: "20rem",marginLeft:'6rem'}}>
              <img class="card-img-top" src="/Quo.jpg" alt="Card image cap"/>
          <div class="card-body">
              <h2>Multi-brand quotations</h2>
              <p class="card-text">Receive multi-brand Quotations after completion of your property site assessment .
              </p>
          </div>  
</div>
</div>

      <div className="col-sm">
      <div class="card" style={{width: "20rem",marginLeft:'8rem'}}>
              <img class="card-img-top" src="/CompQuo.png" alt="Card image cap"/>
          <div class="card-body">
              <h2>Compare Quotes Online</h2>
              <p class="card-text">Pick the best quote for you and save with solar! </p>
      </div>
               
      </div>
      </div>
</div>
                  </div>
                  <div className ="info-section2" style={{ backgroundColor: 'midnightblue' ,width:'100%' ,height:'500px',marginTop:"2em"}}>
                    <h1 style={{color:"white",fontFamily: "Open Sans",color:'white',paddingBottom:'4rem', paddingTop:'2rem'}}>Why Solar?</h1>
 <div className="row" >
  <div className="col-sm">
  <div class="card" style={{marginLeft:'2.5rem'}}>
  <div class="card-image">
    <img src="/1st.png" alt="Card image cap" style={{width:'100%',paddingTop:'1rem'}}/>
  </div>
  <p class="card-title"><h2> Solar Energy is Free </h2></p>
  <p class="card-body">
Save ~90% on electricity bills, and also make money by selling excess solar units back to the grid
  </p>
</div>
</div>

<div className="col-sm">
  <div class="card" style={{marginLeft:'2.8rem'}}>
  <div class="card-image">
    <img src="/2nd.png" alt="Card image cap" style={{width:'80%',paddingTop:'1rem'}}/>
  </div>
  <p class="card-title"><h2> Subsidy*</h2></p>
  <p class="card-body">
Government in India has incentives for Solar in terms of Direct Benefit transfer through National Subsidy Portal
  </p>
</div>
</div>

<div className="col-sm">
  <div class="card" style={{marginLeft:'3rem'}}>
  <div class="card-image">
    <img src="/3rd.png" alt="Card image cap" style={{width:'80%', paddingTop:'1rem'}}/>
  </div>
  <p class="card-title"><h2>High ROI</h2></p>
  <p class="card-body">
Project pays back in 4-5 yrs, all of the savings in electricity bills post that end up being profit for you
  </p>
</div>
</div>

<div className="col-sm">
  <div class="card" style={{marginLeft:'3rem'}}>
  <div class="card-image">
    <img src="/4th.png" alt="Card image cap" style={{width:'80%',paddingTop:'1rem'}}/>
  </div>
  <p class="card-title"><h2>Green & Clean Energy</h2></p>
  <p class="card-body">
  

3kW Solar Plant (a typical for a house with a bill of INR 3000) helps reduce ~60 tons of CO2 over its lifetime
  </p>
  
</div>
</div>
</div>
   </div>



        <div className="Adverties" style={{paddingLeft:'15rem'}}>
          <div className="Description">
            <h2 style={{color:"black"}}>Don't compromise on your quality of life </h2>
   
   <ul>
      <li>
        Stop telling your kids to switch off the AC (air-conditioner) every time they keep it 'On' for long
      </li>
      <li>
        Run your air-conditioner guilt-free.
      </li>
      <li>
        Get Rooftop Solar and live worry-free about your electricity bills
      </li>
    </ul>
    <button className="shop-now1" id="Regid1">Get a Free Quote</button>
            
    </div>

      <div className="ProductPic">
      
      <img src="/happy family.png" alt="family"/>

      </div>
        </div>

        <div className="Adverties">
          <div className="Description" style={{paddingTop:'1rem',paddingLeft:'5rem'}}>
            <h2 style={{color:"black",marginRight:"5rem"}}>Become an Installation Partner </h2>
   
   <ul>
      <li>
      Grow your business with Sunrise Solar's completed property profile leads.
      </li>
      <li>
      Enjoy simple, frictionless tech that helps you manage complex solar projects with the touch of a button from a mobile or from the web.
      </li>
    </ul>
    <button className="shop-now1" id="Regid2" style={{marginRight:'22rem'}}>Become a Partner</button>
            
    </div>

      <div className="ProductPic1">
      
      <img src="/Mechanic.jpg" alt="family"/>

      </div>
        </div>  

          </main>
    
          <footer className="solar-epc-footer">
            <div className="contact-options">
            </div>
          </footer>
        </div>
      );
    };
