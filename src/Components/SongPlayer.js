import React, {useState, useRef, useEffect} from 'react'
import SongControl from './SongControl';
import SongDetails from './SongDetails';

function SongPlayer(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSong(() => {
                let temp = props.currentSong;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSong(() => {
                let temp = props.currentSong;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className="player">
            <audio src={props.songs[props.currentSong].src} ref={audioEl}></audio>
            <h4><b>MUSIC PLAYER</b></h4> <hr/>
            <SongDetails song={props.songs[props.currentSong]} />
            <SongControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} /> <hr/>
            <p>Next up: <span>{props.songs[props.nextSong].title} by {props.songs[props.nextSong].artist}</span></p>
        </div>
    )
}

export default SongPlayer;