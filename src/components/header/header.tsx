import {Link} from "react-router-dom";

export default  function Header(){
    return(
        <div className="header">
            <div className="header__wrapper">
                <Link className="header__link" to="/calculator">Calculator</Link>
                <Link className="header__link" to="/task">Task</Link>
            </div>
        </div>
    )
}
