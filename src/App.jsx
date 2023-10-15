import './App.css'
import {BsTwitter, BsPinterest, BsInstagram} from 'react-icons/bs'
import {AiFillFacebook, AiFillYoutube} from 'react-icons/ai'
import { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function App (){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const pattern =   /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  const [value, setValue] = useState("")
  const [errorState, setErrorState] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const menuLink = "/images/icon-hamburger.svg"
  const cancelLink = "/images/icon-close.svg"
  const [menuIcon, setMenuIcon] = useState(menuLink)
  function handleSubmit (e){
    e.preventDefault()
    if(value.match(pattern)){
      setErrorState(false)
      setValue('')
    } else{
      setErrorState(true)
    }
  }

  window.addEventListener("scroll", ()=>{
    setShowMenu(false)
    setMenuIcon(menuLink)
  })

  
const CustomDots = ({
  index, 
  onClick, 
  active
})=>{
  return<>
  <button onClick={e=>{
    e.preventDefault()
    onClick();
  }} className={active ? 'active-dot':'dot'} />
  </>
}

  return<>
  <nav>
    <img src="/images/logo.svg" alt="logo" className="logo" />
   {showMenu && <div className="mobilemenu">
   <ul>
      <li>Pricing</li>
      <li>Product</li>
      <li>About Us</li>
      <li>Careers</li>
      <li>Community</li>
    </ul>
   </div>}
 <img src={menuIcon} alt="menu" className='menu' onClick={()=>{if(menuIcon===menuLink){setMenuIcon(cancelLink)}else{setMenuIcon(menuLink)}; setShowMenu(!showMenu)}}/>
    <ul>
      <li>Pricing</li>
      <li>Product</li>
      <li>About Us</li>
      <li>Careers</li>
      <li>Community</li>
    </ul>
    <button>Get started</button>
  </nav>
  <main>
    <div className="section1">
      <div className="des">
        <h1>Bring everyone together to build better products</h1>
        <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view </p>
        <br />
        <button>Get started</button>
      </div>
      <img src="/images/illustration-intro.svg" alt="illustration" className="illustration" />
    </div>
    <div className="section2">
      <div className="section2-1">
        <div className="des">
          <h1>What's different about Manage?</h1>
          <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams</p>
        </div>
        <div className="list">
          <ol>
            <li><h4>Track company-wide progress</h4>
            <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
            </li>
            <li><h4>Advanced built-in reports</h4>
            <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps build out the reports you need to keep key stakeholders informed.</p>
            </li>
            <li><h4>Everything you need in one place</h4>
            <p>Stop jumping from one service to another to communicate. Store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
            </li>
          </ol>
        </div>
      </div>
<div className='section2-2'>
<h1>What they've said</h1>
        <br />
        <br />
<Carousel showDots={true} customDot={<CustomDots />}  removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} className='section2-2-1'>
<div className="test">
   <img src="/images/avatar-anisha.png" alt="anisha" className='img' />
            <h4>Anisha Li</h4>
            <p>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</p>
          </div>
          <div className="test">
            <img src="/images/avatar-ali.png" alt="ali" className='img' />
            <h4>Ali Bravo</h4>
            <p>"We have been able to cancel so many other subscriptions since using manage. There is no more cross-channel confusion and everyone is much more focused."</p>
          </div>
          <div className="test">
            <img src="/images/avatar-richard.png" alt="richard" className='img' />
            <h4>Richard Watts</h4>
            <p>"Manage allows us to provide structure and process. it keeps us organized and focused. I can't stop recommending them to everyone I talk to!"</p>
          </div>
          <div className="test">
            <img src="/images/avatar-shanai.png" alt="shanai" className='img' />
            <h4>Shanai Gough</h4>
            <p>"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in sync without being intrusive."</p>
          </div>
</Carousel>
<button className='button'>Get Started</button>
</div>



    </div>
    <div className="section3">
      <h1>Simplify how your team works today.</h1>
    <button>Get started</button>
    </div>
    <footer>
      <div className="section4-1">
      <p>Copyright 2023. All Rights Reserved</p>
      <img src="/images/logo.svg" alt="logo" className='logo' />
      <div className="section4-1-1">
        <AiFillFacebook className='icon' />
        <AiFillYoutube  className='icontube' />
        <BsTwitter  className='icon' />
        <BsPinterest className='icon' />
        <BsInstagram className='icon' />
      </div>
      </div>
      <div className="section4-2">
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About us</li>
        </ul>
        <ul>
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="section4-3">
       <form>
       <input type="text" placeholder='updates in your inbox...' value={value} onChange={e=>{setValue(e.target.value)}} className={errorState && 'error'} />
        <button onClick={handleSubmit}>Go</button>
       </form>
       {errorState && <span>please input a valid email.</span>}
       <p>Copyright 2023. All Rights Reserved</p>
      </div>
    </footer>
  </main>
  </>
}