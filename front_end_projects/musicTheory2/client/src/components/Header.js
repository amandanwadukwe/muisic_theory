import HamburgerMenu from "../resources/menu.svg";
import Logo from "../resources/muisic-logo.png";
export default function Header(props){
    return <header>
        <div className="icon logo-container" onClick={()=> props.goToFirstLesson()}>
            <img className="logo" src={Logo} alt="logo" />
        <h1 >Muisic.theory</h1>
        </div>
        <img className="icon menu-icon" onClick={props.toggleNavigationState} src={HamburgerMenu} alt="primary navigation"/>
    </header>
}