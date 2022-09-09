import ExclamationMark from "../resources/exclamation.svg";
import Tick from "../resources/tick.svg";
import BackBtn from "../resources/arrow_back.svg";

export default function Lesson5(props){
    return <section className={props.activePageNumber===5?"display":"hide"}>
                <div className="lesson-header">

        <img className="icon" onClick={props.goToPreviousPage} src={BackBtn} alt="go to previous lesson"/>
        <h2>Lesson 5: Arrangement</h2>
        </div>
        <div className="terms">
            <p>
            <strong>Scale</strong>: An organised sequence of notes for a particular style of music.
            </p>
            <img src={ExclamationMark} alt="terms"/>
        </div>
        <p>When creating your piece, combine the notes of a family in an order that sounds good to you. These families are called Scales, and some popular scales include the <b>major scale</b>, <b>minor scale</b>, <b>blues scale</b>, <b>jazz scale</b>, etc.</p>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>Each scale has a formula. You can play a scale from any key using the scale's formula. An A-minor blues scale and a G-minor blues scale are derived using the general formula for blues scales.</p>
            
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rgaTLrZGlk0?controls=0&amp;start=308&end=318" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rgaTLrZGlk0?controls=0&amp;start=329&end=371" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button type="button" onClick={props.goToNextPage} className="btn">Lesson 6</button>
    </section>
}