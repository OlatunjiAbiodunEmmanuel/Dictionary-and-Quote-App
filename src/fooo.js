import { React, useState } from "react";
import Axios from "axios";


function Fooo() {

  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");
 
  function find() {
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)
    .then((response) => {setData(response.data[0]);});
  }

  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }
 
  return (

    <div className="row container-fluid">

    <h1>Dictionary</h1>

    <div className="container-sm">
    <input type="text"placeholder="Search" onChange={(e) => {setSearchWord(e.target.value);}}/>
    <button className="border-0" onClick={() => {find();}} style={{marginLeft:"5px"}}>search</button>
    </div>


{data &&(

<div style={{textAlign:"center"}}>

<h2>{`You just searched for the word "${data.word}"`}{" "}</h2><button className="mb-4 border-0" onClick={()=>{playAudio();}}>Audio</button> <br></br>

<div id="login2">
<h4>Parts of speech:</h4>
<p>{data.meanings[0].partOfSpeech}</p>
</div>

<div id="login2">
<h4>Definition:</h4>          
<p>{data.meanings[0].definitions[0].definition}</p> 
</div>

<div id="login2">
<h4>Example:</h4>
<p>{data.meanings[0].definitions[0].example}</p>
</div>

</div>

)}


</div>

  );
    }
  export default Fooo