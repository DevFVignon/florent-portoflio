import React from 'react';
import '../../assets/styles/main.scss'
import Header from '../Header/Header'
import Presentation from '../Presentation/Presentation';
import Competences from '../Competences/Competences';
import Projects from '../projects/Projects';
import AvantDev from '../Avant_dev/Avant_dev';
import Contacts from '../Contacts/Contacts';


function App() {
  return (
    <div className='app'>
      <Header/>
      <Presentation/>
      <Competences/>
      <Projects/>
      <AvantDev/>
      <Contacts/>
    </div>
  );
}

export default App;
