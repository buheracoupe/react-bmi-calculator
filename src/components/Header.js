import scale from "../Assets/weight-scale-svgrepo-com.svg"
function Header(){
    return(
        <div className="Header">
            <h1>BMI Calculator</h1>
            <img className="scale-img" src={scale} alt="a scale"/>
            <div className="divider"></div>
        </div>
    )
}

export default Header;