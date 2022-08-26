import Tick from "../resources/tick.svg";
import Question from "../resources/question.svg";
import BackBtn from "../resources/arrow_back.svg";

export default function Lesson1(props){
    return <section className={props.activePageNumber===1?"display":"hide"}>
                <div className="lesson-header">

        <img className="icon"  onClick={props.goToPreviousPage} src={BackBtn} alt="go to previous lesson"/>
        <h2>Lesson 1: Building blocks, not puzzles</h2>
        </div>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>If your playing sounds good to you, it's a masterpiece</p>
        </div>
        <p>Many people see the keys on a piano as different pieces of a puzzle when they are, in fact, building blocks. Arrange them in whatever order you choose to create a sound that is pleasing to you.</p>
        <div className="activity">
            <p>What is the significant difference between a puzzle and a set of building blocks?</p>
            <img src={Question} alt="activity"/>
        </div>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>A puzzle requires the exact initial form of an idea, like a picture, to be recreated, while building blocks allow you to form and bring new ideas to life.</p>
            
        </div>
                <button type="button" onClick={props.goToNextPage} className="btn">Lesson 2</button>


    </section>
}