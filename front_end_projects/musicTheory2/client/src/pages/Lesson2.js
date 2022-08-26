import MusicTheoryPiano from "../components/MusicTheoryPiano";
import ExclamationMark from "../resources/exclamation.svg";
import Tick from "../resources/tick.svg";
import BackBtn from "../resources/arrow_back.svg";
import Piano from "../resources/piano.svg";


export default function Lesson2(props){
    return <section className={props.activePageNumber===2?"display":"hide"}>
            <div className="lesson-header">

        <img className="icon"  onClick={props.goToPreviousPage} src={BackBtn} alt="go to previous lesson"/>
        <h2>Lesson 2: The basic building blocks</h2>
        </div>
        <div className="terms">
            <p>
            <strong>Note</strong>: A note is a symbol representing a musical sound.<br/> <strong>Key</strong>: A set of notes that correspond to a particular scale. The button-like parts of a piano are also referred to as keys.
            </p>
            <img src={ExclamationMark} alt="terms"/>
        </div>
        <img src={Piano} className="piano" alt="The 12 repeated keys on a piano and their names"/>
        {/* <MusicTheoryPiano/> */}
        <p>The piano is a repetition of only these 12 notes, and they are your building blocks.</p>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>When looking for a key or a note in ear training, it is helpful to remember that there are only 12 possible choices.</p>
            
        </div>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>Notice how  the black keys are named as sharps(#) of the previous key and flats(b) of the preceding key.</p>
            
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rgaTLrZGlk0?controls=0&amp;start=217&end=246" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rgaTLrZGlk0?controls=0&amp;start=290&end=307" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rgaTLrZGlk0?controls=0&amp;start=504&end=517" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button type="button" onClick={props.goToNextPage} className="btn">Lesson 3</button>

    </section>
}