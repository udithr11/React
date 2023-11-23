
    const heading1 = React.createElement("h1",{
        id:"first",
        style:{backgroundColor:"red"}
    },"Namasthe form react heading1");

    const heading2 = React.createElement("h1",{
        id:"second",
        style:{backgroundColor:"blue"}
    },"Namasthe form react Heading2");
    
    const container = React.createElement("div",{
        id:"container",
       
    },[heading1,heading2]);



    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(container)