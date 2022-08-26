import Tick from "../resources/tick.svg";
import BackBtn from "../resources/arrow_back.svg";

export default function Lesson6(props){
    return <section className={props.activePageNumber===6?"display":"hide"}>
                <div className="lesson-header">

        <img className="icon"  onClick={props.goToPreviousPage} src={BackBtn} alt="go to previous lesson"/>
        <h2>Lesson 6: Major Scale</h2>
        </div>
        <p>The pattern for a major scale is:<br/><br/><b>root note</b> + <b>W</b> + <b>W</b> + <b>H</b> + <b>W</b> + <b>W</b> + <b>W</b> + <b>root note</b><br/><br/><strong>W - Whole tone</strong>: two keys from any note on a piano, i.e. skip one note. Key D is a whole tone from key C.<br/><strong>H - Half tone</strong>: A step from any note on a piano, i.e. play the next note. Key C# is a half tone from key C<br/> A half step can also be referred to as a half tone or semitone, while a whole step can also be referred to as a whole tone or a tone.</p>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>This would make C major scale:<br/>C + D + E +  F  +  G  +  A +  B</p>
        </div>
        {/* <video></video> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rgaTLrZGlk0?controls=0&amp;start=281&end=290" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rgaTLrZGlk0?controls=0&amp;start=318&end=326" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rgaTLrZGlk0?controls=0&amp;start=371&end=472" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button type="button" onClick={props.goToNextPage} className="btn">Lesson 7</button>
    </section>
}