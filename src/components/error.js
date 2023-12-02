import {useRouteError} from 'react-router-dom';
import {Link} from "react-router-dom";





const Error = () => {
    const err=useRouteError()
  return (
    <div>
        <h1>oops!!!!</h1>
        <h2>Sorry something went wrong</h2>
        <h1>{err.status+"  :  " +err.statusText}</h1>
        <h2>{err.data}</h2>
        <h1><Link to="/"><h3>go back</h3></Link></h1>
        

    </div>
  )
}

export default Error