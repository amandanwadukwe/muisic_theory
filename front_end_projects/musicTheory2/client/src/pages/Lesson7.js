import Tick from "../resources/tick.svg";
import BackBtn from "../resources/arrow_back.svg";

export default function Lesson7(props){
    return <section className={props.activePageNumber===7?"display":"hide"}>
                <div className="lesson-header">

        <img className="icon"  onClick={props.goToPreviousPage} src={BackBtn} alt="go to previous lesson"/>
        <h2>Lesson 7: Minor Scale</h2>
        </div>
        <p>The pattern for a major scale is:<br/><br/><b>root note</b> - <b>W</b> - <b>H</b> - <b>W</b> - <b>W</b> - <b>H</b> - <b>W</b> - <b>W</b><br/><br/><strong>W - Whole tone</strong> : two keys from any note on a piano i.e. skip one note. Key D is a whole tone from key C.<br/><strong>H - Half tone</strong>: A step from any note on a piano i.e. play the next note Key C# is a half tone from key C.<br/> A <b>half step</b> can also be referred to a <b>half tone</b> or <b>semi tone</b> while a <b>whole step</b> can also be referred to as a <b>whole tone</b> or a <b>tone</b></p>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>This would make C major scale:<br/>C - D - E -  F  -  G  -  A -  B</p>
        </div>
        <button type="button" onClick={props.goToNextPage} className="btn">Lesson 7</button>
    </section>
}