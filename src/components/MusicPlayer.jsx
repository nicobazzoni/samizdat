import { useRef, useState, useMemo } from 'react';
import { Html, MeshWobbleMaterial, Text } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const song1 = 'src/assets/songs/kalkuta.mp3';
const song2 = 'src/assets/songs/off.mp3';
const song3 = 'src/assets/songs/skyline.mp3';
const song4 = 'src/assets/songs/spider.mp3';
const song5 = 'src/assets/songs/tron.mp3';
const song6 = 'src/assets/songs/seeyathere.mp3';




const songs = [
    { title: "kalkuta", url: song1 },
    { title: "off", url: song2 },
    { title: "skyline", url: song3 },
    { title: "spider", url: song4 },
    { title: "tron", url: song5 },
    { title: "see ya there", url: song6 }
  ];

  export default function AudioPlayer() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio());
  
    const handleSongSelect = (index) => {
      setCurrentSongIndex(index);
      audioRef.current.src = songs[index].url;
      audioRef.current.play();
      setIsPlaying(true);
    };

    const handlePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    const playNext = () => {
      let nextIndex = (currentSongIndex + 1) % songs.length;
      handleSongSelect(nextIndex);
    };
  
    const playPrevious = () => {
      let prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      handleSongSelect(prevIndex);
    };

    const songColors = useMemo(() => 
    songs.map((_, index) => 
      index === currentSongIndex && isPlaying ? 'hotpink' : 'white'
    ), 
    [currentSongIndex, isPlaying]
  );
  
    return (
        <>
         {songs.map((song, index) => (
        <group key={song.title} position={[0, index * 0.5, 2]}>
          <mesh onClick={() => handleSongSelect(index)}>
            <Text 
              position={[1.2, 2.5, 0]} 
              fontSize={0.2} 
              color={songColors[index]}
              font='/fonts/Poppins-Black.ttf'>
              {song.title}
            </Text>
          </mesh>
        </group>
      ))}
    
          <Html position={[2, -1.1, 0]}>
            <div className='playButton'>
            <button className='playButton' onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button className='playButton' onClick={playPrevious}>Prev</button>
            <button className='playButton' onClick={playNext}>Next</button></div>
          </Html>
        </>
      );
    }