import Tick from "../resources/tick.svg";
import ExclamationMark from "../resources/exclamation.svg";
import Question from "../resources/question.svg";
import BackBtn from "../resources/arrow_back.svg";

export default function Introduction(props){
    return <section className={props.activePageNumber===0?"display":"hide"}>
        <div className="lesson-header">
        <img className="icon" onClick={props.goToPreviousPage} src={BackBtn} alt="go to previous lesson"/>
        <h2>Introduction</h2>
        </div>
        <p>According to Josh Kaufman, an author of bestsellers, in an article by Forbes:</p>
        <blockquote cite="https://www.forbes.com/sites/danschawbel/2013/05/30/josh-kaufman-it-takes-20-hours-not-10000-hours-to-learn-a-skill/"><i>You don’t have to “master” every skill you ever learn. I believe that developing new skills in a way that allows you to perform *well enough for your own purposes* is – by far – the most common and valuable purpose of skill acquisition. Based on my research, reaching that level doesn’t take anywhere close to 10,000 hours – you can usually achieve the goals you set yourself in around 20 hours of deliberate practice.</i></blockquote>
        <a href="https://www.forbes.com/sites/danschawbel/2013/05/30/josh-kaufman-it-takes-20-hours-not-10000-hours-to-learn-a-skill/?sh=20d4a5a7363d" target="_blank" rel="noreferrer" className="btn">View article</a>
        <p>It is possible to learn to play an instrument in a day if only the day had enough hours to allow you to practice playing it for the number of times it would take your brain to recall patterns easily.</p>
        <div className="paragraph-with-list">
        <h3>Objectives</h3>
        <ul>
            <li>Understand and be able to recall the basic patterns</li>
            <li>Practice playing the piano for the number of hours it would take the brain to easily recognise these patterns</li>
        </ul>
        </div>
        <div className="tip">
            <img src={Tick} alt="tip"/>
            <p>Understand and be able to recall the basic patterns</p>
        </div>
        <h3>Key</h3>
        <ul className="key">
                 <li><div>
                    <span><b>Activity:</b></span>
                    <img src={Question} alt="Activities are denoted using this symbol"/>
                </div></li>
                <li><div>
                    <span><b>Information:</b></span>
                    <img src={ExclamationMark} alt="Information are denoted using this symbol"/>
                </div></li>
                <li><div>
                    <span><b>Tip:</b></span>
                    <img src={Tick} className="icon" alt="Tips are denoted using this symbol"/>
                </div></li>
                <li><div>
                    <span><b>a - b:</b></span>
                    <span>Play note a then play note b afterwards</span>
                </div></li>
                <li><div>
                    <span><b>a + b:</b></span>
                    <span>Play note a and note b together</span>
                </div></li>
        </ul>
        <button type="button" onClick={props.goToNextPage} className="btn">Lesson 1</button>
    </section>
}