import { useRef, useState, useMemo } from 'react';
import { Html, MeshWobbleMaterial, Text } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';




const songs = [
    { title: "kalkuta", url: "/public/songs/kalkuta.mp3" },
    { title: "off", url: "/public/songs/off.mp3" },
    { title: "skyline", url: "/public/songs/skyline.mp3" },
    { title: "spider", url: "/public/songs/spider.mp3" },
    { title: "tron", url: "/public/songs/tron.mp3" },
    { title: "see ya there", url: "/public/songs/seeyathere.mp3" }
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