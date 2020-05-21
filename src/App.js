import React from 'react';
import './App.css';


const sounds = [
  {
    key: 'Q',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    id: '1',
  },
  {
    key: 'W',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    id: '2',
  },
  {
    key: 'E',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    id: '3',
  },
  {
    key: 'A',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    id: '4',
  },
  {
    key: 'S',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    id: '5',
  },
  {
    key: 'D',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    id: '6',
  },
  {
    key: 'Z',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    id: '7',
  },
  {
    key: 'X',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    id: '8',
  },
  {
    key: 'C',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    id: '9',
  }
  ]

class App extends React.Component {
 
  
  render() {
    return (
      <div className="App" id="drum-machine" >
        <div id="display"><h1 className="fas">&#xf001; Play a sound &#xf001;</h1>
          <div className="display">
            {sounds.map((item, idx) => (
            <Box text={item.key} key={idx} audio={item.sound} id={item.id}/>
            ))}
          </div>
        </div>
    </div>
    )
  };
}

class Box extends React.Component {
 constructor (props){
   super (props);
   this.audio = React.createRef();
 }

playAudio = () => {
  this.audio.current.play()

  const id = this.audio.current.id;
  const display = document.querySelector('#display');
  display.querySelector('h1').innerHTML = `&#xf001; Playing note '${id}' &#xf001;`;
  }
render() {
  return (
    <div className="box drum-pad" id={this.props.id} onClick={this.playAudio}>
      {this.props.text}
      <audio ref={this.audio} src={this.props.audio} className="clip" id={this.props.text}/>
    </div>
  )
}

}

window.document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if(audio) {
    const parent = audio.parentNode;
    parent.classList.add('active');
    audio.play();

    audio.addEventListener('ended', ()=> {
      parent.classList.remove('active');

      const display = document.querySelector('#display');
      display.querySelector('h1').innerHTML = `&#xf001; Playing note '${id} &#xf001;'`;
    });
  }
})


export default App;

