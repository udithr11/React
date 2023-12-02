import {Link} from "react-router-dom";


const About=function(){
    return(
        <div>
            <h1>About Us Page</h1>
            <p>this is all about us!!!!</p>
            <Link to="/"><h3>go back</h3></Link>
            
        </div>
    )
}



export default About;