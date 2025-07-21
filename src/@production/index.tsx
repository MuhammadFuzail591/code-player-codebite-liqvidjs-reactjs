import { Audio, Playback, Player } from 'liqvid'
import { createRoot } from 'react-dom/client'
import myAudio from '../../static/audio.mp4'
import myAudioWebm from '../../static/audio.webm'
import { UI } from './ui'
const playback = new Playback({ duration: 45531.400000002235 })

function Lesson () {
  return (
    <Player playback={playback}>
      <Audio>
        <source src={myAudio} type='audio/mp4' />
        <source src={myAudioWebm} type='audio/webm' />
      </Audio>
      <UI />
    </Player>
  )
}

createRoot(document.querySelector('main')).render(<Lesson />)
