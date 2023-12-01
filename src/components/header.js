import {useState} from "react"



export const Title = function () {
  // console.log("Title rendered");

    return (
      
      <a className="title" href="/">
        <img
          className="logo"
          alt="Logo"
          src="data:image/webp;base64,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"
        />
       

       </a>
          
    );
  };
  
  const HeaderComponent = function () {
    const [titleName,setTitleName]=useState("BEAGLE")
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    console.log("HeaderComponent rendered");
    return (
      <div className="header">
        <Title />
        <h1 className="name">{titleName}</h1>
        <button className="nameChangeBtn" onClick={()=>{
          if(titleName==="BEAGLE"){
            setTitleName(".    beagle    .")
          }else{
            setTitleName("BEAGLE")
          }
        } }>
          Change Title

        </button> 
        <div className="nav-items">
          <ul>
            <li className="home">Home</li>
            <li className="about">About</li>
            <li className="contact">Contact</li>
            <li className="cart">Cart</li>
          </ul>
         
        </div>
        {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>logout</button>
          :<button onClick={()=>setIsLoggedIn(true)}>login</button>
          }
      </div>
    );
  };


  export default HeaderComponent;