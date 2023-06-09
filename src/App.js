import {useState, useEffect} from 'react';
import SongPlayer from './Components/SongPlayer';

function App() {
  const [songs] = useState([
    {
      title: "Mastaaru Mastaaru",
      artist: "Dhanush",
      img: "./images/CP img 1.jpg",
      src:"./music/01 - Mastaaru-Mastaaru.mp3"
    },
    {
      title: "Boss Party",
      artist: "Chiranjeevi",
      img: "./images/CP img 2.jpg",
      src: "./music/Boss-Party.mp3"
    },
    {
      title: "Suriya Son Of Krishnan",
      artist: "Suriya",
      img: "./images/CP img 3.jpg",
      src: "./music/Monna kanipinchavu.mp3"
    },
    {
      title: "Butta Bomma",
      artist: "Allu Arjun",
      img: "./images/CP img 4.jpg",
      src: "./music/Butta Bomma.mp3"
    },
    {
      title: "Raa Silaka",
      artist: "Rama Krishna",
      img: "./images/CP img 5.jpg",
      src: "./music/[iSongs.info] 01 - Raa Silaka.mp3"
    },
    {
      title: "Kushi",
      artist: "VJ and Samantha",
      img: "./images/CP img 6.jpg",
      src: "./music/[iSongs.info] 01 - Na Roja Nuvve.mp3"
    },
  ]);

  const [currentSong, setCurrentSong] = useState(0);
  const [nextSong, setNextSong] = useState(0);

  useEffect(() => {
    setNextSong(() => {
      if (currentSong + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSong + 1;
      }
    });
  }, [currentSong, songs.length]);

  return (
    <div className="App">
      <SongPlayer 
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong} 
        nextSong={nextSong} 
        songs={songs}
      />
    </div>
  );
}

export default App;
