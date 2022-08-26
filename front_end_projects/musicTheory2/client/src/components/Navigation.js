import Close from "../resources/close.svg";
export default function Navigation(props){
    return <nav className={props.showPrimaryNavigation ? "display":"hide"}>
        <div className="exit-btn-container" onClick={props.toggleNavigationState}>
            <img  className="icon" src={Close}  alt="exit"/>
        </div>
       <ul>
            <li onClick={()=> props.goToFirstLesson()}><div className="primary-nav-link"><a href=""><div className="letter-one">h</div><div className="letter-two">o</div><div className="letter-three">m</div><div className="letter-four">e</div></a></div></li>
            <li><div className="primary-nav-link"><a href=""><div className="letter-one">C</div><div className="letter-two">o</div><div className="letter-three">n</div><div>t</div><div className="letter-four">a</div><div className="letter-five">c</div><div className="letter-six">t</div></a></div></li>
            <li><div className="primary-nav-link"><a href=""><div className="letter-one">A</div><div className="letter-two">b</div><div className="letter-three">o</div><div className="letter-four">u</div><div className="letter-five">t</div></a></div></li>
       </ul>
    </nav>
}