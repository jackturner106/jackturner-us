import './App.css';
import JackTile from './components/JackTile';
import Header from './components/Header';
import Grid from '@mui/material/Grid';
import {useState} from 'react'
import MoreInfo from './components/MoreInfo';


function App() {
  const [active, setActive] = useState();
  const setActiveHelper = (newId) => {
    setActive(active === newId ? "" : newId)
  }
  const clearActive = () => {
    setActive("")
  }
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
      <Header/>
      <JackTile title={"Mars Rover"} body={"I did mars rover stuff"} onClick={()=>setActiveHelper("marsRover")}/>
      <JackTile title={"NER"} body={"I did NER stuff"} onClick={()=>setActiveHelper("ner")}/>
      </Grid>
      <Grid item xs={12} md={6}>
      {active==="marsRover" && <MoreInfo 
      title={"Mars Rover"} 
      body={"This is more info abt mars Rover"} 
      clear={clearActive}></MoreInfo>}
      {active==="ner" && <MoreInfo title={"NER"} body={"This is more info abt NER"} clear={clearActive}/>}
      </Grid>
    </Grid>
  );
}

export default App;