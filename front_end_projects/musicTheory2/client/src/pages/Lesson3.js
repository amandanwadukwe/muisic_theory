import ExclamationMark from "../resources/exclamation.svg";
import Question from "../resources/question.svg";
import Tick from "../resources/tick.svg";
import BackBtn from "../resources/arrow_back.svg";


export default function Lesson3(props){
    return <section className={props.activePageNumber===3?"display":"hide"}>
                <div className="lesson-header">

        <img className="icon"  onClick={props.goToPreviousPage} src={BackBtn} alt="go to previous lesson"/>
        <h2>Lesson 3: Slightly less basic building blocks</h2>
        </div>
        <div className="terms">
            <p>
            <strong>Chord</strong>: Two or more notes played together
            </p>
            <img src={ExclamationMark} alt="terms"/>
        </div>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p><b>C#m7b5</b> is read as C sharp minor 7 flat 5</p>
            
        </div>
        <p>A deep blue colour, a navy blue colour and a sky blue colour are all still considered blue. Likewise, in playing the piano, a Cm(C minor), Cmaj7(C major 7) and  a Cm7sus2(C minor 7 sustain 2) are all C because their root note is C. Let's try that again: Dmaj(D major), Dm7b5(D minor 7 flat 5) are all D, they both have D as their root note.</p>
        <p>What are the root notes of the following chords:</p>
            <ol>
                <li>Gm7b5</li>
                <li>Bmaj9</li>
                <li>Db7b5</li>
                <li>A#maj9</li>
            </ol>

<div className="tip">
            <img src={Tick} alt="tip"/>
            <ol>
                <li>G</li>
                <li>B</li>
                <li>Db</li>
                <li>A#</li>
            </ol>
            
        </div>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>Find the chord to your favourite song online, transform each chord to its root note and play the root notes instead of the chord to match the tune of the song.</p>
            
        </div>
        <button type="button" onClick={props.goToNextPage} className="btn">Lesson 4</button>
    </section>
}