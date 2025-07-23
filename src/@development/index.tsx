import { AudioRecording, RecordingControl } from '@liqvid/recording'

import { CodeRecording } from '@lqv/codemirror/recording'
import { Playback, Player } from 'liqvid'
import { createRoot } from 'react-dom/client'
import UI from './ui'

const controls = [
  <RecordingControl plugins={[AudioRecording, CodeRecording]} />
]

const playback = new Playback({ duration: 30000 }) // doesn't matter what duration we use when recording

function Lesson () {
  return (
    <Player controls={controls} playback={playback}>
      <UI />
    </Player>
  )
}

createRoot(document.querySelector('main')).render(<Lesson />)
