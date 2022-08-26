import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Introduction from './pages/Introduction';
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';
import Lesson6 from './pages/Lesson6';
import Lesson7 from './pages/Lesson7';
import Lesson8 from './pages/Lesson8';
import About from './pages/About';
import MusicTheoryPiano from "./components/MusicTheoryPiano";

import { useState } from "react";
import './App.css';

function App() {
  const [showPrimaryNavigation, setShowPrimaryNavigation] = useState(false);
  const [activePageNumber, setActivePageNumber] = useState(0);

  function toggleNavigationState(){
    setShowPrimaryNavigation(!showPrimaryNavigation);
  }

  function goToNextPage(){
    if(activePageNumber < 9) setActivePageNumber(activePageNumber+1);
  }

  function goToPreviousPage(){
      if(activePageNumber > 0) setActivePageNumber(activePageNumber-1);
  }

  function goToAboutPage(){
    setActivePageNumber(9)
  }

  function goToFirstLesson(){
    setActivePageNumber(1)
  }
  return (
    <div className="App">
      <Header toggleNavigationState={toggleNavigationState} />
      <Navigation toggleNavigationState={toggleNavigationState} showPrimaryNavigation={showPrimaryNavigation} goToAboutPage={goToAboutPage} goToFirstLesson={goToFirstLesson}/>
      <main>
      <Introduction activePageNumber={activePageNumber} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} />
      <Lesson1 activePageNumber={activePageNumber} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/>
      <Lesson2 activePageNumber={activePageNumber} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/>
      <Lesson3 activePageNumber={activePageNumber} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/>
      <Lesson4 activePageNumber={activePageNumber} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/>
      <Lesson5 activePageNumber={activePageNumber} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/>
      <Lesson6 activePageNumber={activePageNumber} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/>
      <Lesson7 activePageNumber={activePageNumber} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/>
      <Lesson8 activePageNumber={activePageNumber} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/>
            <About activePageNumber={activePageNumber}/>

      </main>
      <MusicTheoryPiano/>
      <Footer />

    </div>
  );
}

export default App;
