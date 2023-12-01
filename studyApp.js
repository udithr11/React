import React from "react";
import ReactDOM from "react-dom/client";


    const heading1 = React.createElement("h1",{
        id: "first" ,
        key: "h1" ,
        style: { backgroundColor: "red" }}
    ,"Namasthe form react heading1 inside functional component");

    const heading3=(<h1 id="first" style={{backgroundColor : "pink" }}>
         Namasthe form react using jsx 
         </h1>);

    const Heading5=function(){
        return(
        (<h1 id="first" style={{backgroundColor : "pink" }}>
            Namasthe form react Heading 5
    </h1>));}

    const HeaderComponent = function () {
        return (
        <div>
            {/* to call a react element or can type any js code in {}*/}
        {heading1}   
        {/* to call a functional component */}
        < Heading5 />
        <h1> 
            Namasthe from functional reading in diff way componenttt? 
        </h1>
        </div>
        );
    };

    const heading2 = React.createElement("h1",{
        id: "second" ,
        key: "h2" ,

        style:{ backgroundColor : "blue" }
    },"Namasthe form react Heading2");
    
    const container = React.createElement("div",{
        id:"container"
       
    },[heading2,heading3,<HeaderComponent/> ]);

    const styleObject={
        backgroundColor: "rgba(255,255,255)"
    }
    const jsx= (
        <div style={styleObject}>
            <h1>header1</h1>
            <h2>heading2</h2>
            </div>
    )
    // jsx will only accept one parent. so to give inline styling to the component we have to do like this.
    // if no style to be give n we can wrap in <React.fragment> </React.frangment> 
    // or simply <> </> (empty div)



    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);


    // <h3>{BurgerKing.cusines.join(" , ")}</h3> 
    // {/* this is how we get data from an array */}


// ----------------------------------------------------------------


    // const RestrauntCard = (props) => {
//     // we can also give const RestrauntCard=({restraunt})  this is destructuring the parameter on the go
//   return (
//     <div className="card">

//     <img src={props.restraunt.data.img}/>
//       <h2>{props.restraunt.data.name}</h2>
//       <h3>{props.restraunt.data.cusines.join(" , ")}</h3> 
//       //* this is how we get data from an array
//       <h4>{props.restraunt.rating} Stars</h4>
  
//     </div>
//   );
// };



// const Body = function () {
//     return (
//       <div className="restrauntList">
  
//       <RestrauntCard restraunt={restrauntList[0]}/>
//       <RestrauntCard restraunt={restrauntList[1]}/>
//       <RestrauntCard restraunt={restrauntList[2]}/>
//       <RestrauntCard restraunt={restrauntList[3]}/>
//       <RestrauntCard restraunt={restrauntList[4]}/>
//       <RestrauntCard restraunt={restrauntList[5]}/>
  
//       </div>
//     );
//   };