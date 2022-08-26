import Tick from "../resources/tick.svg";
import BackBtn from "../resources/arrow_back.svg";
import Question from "../resources/question.svg";
import ExclamationMark from "../resources/exclamation.svg";

export default function Lesson8(props){
    return  <section className={props.activePageNumber===8?"display":"hide"}>
                <div className="lesson-header">

        <img className="icon"  onClick={props.goToPreviousPage} src={BackBtn} alt="go to previous lesson"/>
        <h2>Lesson 8: Chords</h2>
        </div>
        <div className="terms">
            <p>
            <strong>Progression</strong>: The succession of chords in a piece of music.
            </p>
            <img src={ExclamationMark} alt="terms"/>
        </div>
        <p>A chord is several notes played together. The more complex a chord is the more robust your piece sounds. You just have to remember that too much of everything is bad.</p>
        <h3>Helpful formulas</h3>
        <p>
            <b>Minor second</b> = <b>Root note</b> + <b>Half step</b><br/>
            <b>Major second</b> = <b>Root note</b> + <b>Whole step</b><br/>
            <b>Minor third</b> = <b>Root note</b> + <b>3 half steps</b>(the note three half steps away from the root note)<br/>
            <b>Major third</b> = <b>Root note</b> + <b>3 whole steps</b>(the note three whole steps away from the root note)
        </p>
        <p>To play a major chord:<br/><br/>
            <b>Root note</b> + <b>Major third</b> + <b>minor third</b><br/><br/>
            <span>Steps:</span>
            <ul>
                <li>Place your thumb on the root note</li>
                <li>Place your middle or index finger on the note a major third away from te root note</li>
                <li>Place your little finger on the note that is a minor third away from the last note</li>
            </ul>
        </p>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>This would make C major chord:<br/>C + E + G</p>
        </div>
        <p>To play a minor chord:<br/><br/>
            <b>Root note</b> + <b>Minor third</b> + <b>Major third</b><br/>
            <span>Steps:</span>
            <ul>
                <li>Place your thumb in the root note</li>
                <li>Place your middle or index finger on the note a minor third away from the root note</li>
                <li>Place your little finger on the note that is a major third away from the last one</li>
            </ul>
        </p>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>This would make C minor chord:<br/>C + Eb + G</p>
        </div>
        <div className="activity">
            <div>
            <p>What are the notes for each of these chords:</p>
            <ol>
                <li>Gm(G minor)</li>
                <li>F#maj(F sharp major)</li>
                <li>Ebm(E flat minor)</li>
            </ol>
            <p>Remember that respectively the root notes are:</p>
            <ol>
                <li>G</li>
                <li>F#</li>
                <li>Eb</li>
            </ol>
            <p>Also remember that flats and sharps have two names each i.e. they are names as the sharp of the preceding key/note and flats of the succeeding /note/note</p>
            </div>
            <img src={Question} alt="activity"/>
        </div>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <ol>
                <li>G + B + D</li>
                <li>F# + A# + C#</li>
                <li>Eb + F# + A#</li>
            </ol>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rgaTLrZGlk0?controls=0&amp;start=610&end=720" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
}