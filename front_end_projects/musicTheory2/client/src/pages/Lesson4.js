import Tick from "../resources/tick.svg";
import BackBtn from "../resources/arrow_back.svg";


export default function Lesson4(props){
    return <section className={props.activePageNumber===4?"display":"hide"}>
                <div className="lesson-header">

        <img className="icon"  onClick={props.goToPreviousPage} src={BackBtn} alt="go to previous lesson"/>
        <h2>Lesson 4: Give it a try!</h2>
        </div>
        {/* <video></video>
        <p>Add both thin and rich sounds to your piece as you like. A good balance between robust and thin bits of your peice would give it a professional feel.</p> */}
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>Find the chord to your favourite song online, transform each chord to its root note and play the root notes instead of the chord to match the tune of the song.</p>
            
        </div>
        <button type="button" onClick={props.goToNextPage} className="btn">Lesson 5</button>
    </section>
}