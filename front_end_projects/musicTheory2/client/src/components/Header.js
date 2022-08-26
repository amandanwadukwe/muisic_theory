import HamburgerMenu from "../resources/menu.svg";

export default function Header(props){
    return <header>
        <h1>Music.theory</h1>
        <img className="icon menu-icon" onClick={props.toggleNavigationState} src={HamburgerMenu} alt="primary navigation"/>
    </header>
}