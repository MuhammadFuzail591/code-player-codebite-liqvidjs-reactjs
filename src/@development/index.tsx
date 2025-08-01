import { AudioRecording, RecordingControl } from '@liqvid/recording'

import { CodeRecording } from '@lqv/codemirror/recording'
import { Playback, Player } from 'liqvid'
import { createRoot } from 'react-dom/client'
import UI from './ui'
import RecordCode from '../components/RecordCode'
import { basicSetup } from '@lqv/codebooth'
import { cpp } from '@codemirror/lang-cpp'
import { javascript } from '@codemirror/lang-javascript'
import React from 'react'

const controls = [
  <RecordingControl plugins={[AudioRecording, CodeRecording]} />
]

const playback = new Playback({ duration: 30000 }) // doesn't matter what duration we use when recording

function Lesson () {
  const extensions = React.useMemo(() => [basicSetup, cpp(), javascript()], [])

  return (
    <Player controls={controls} playback={playback}>
      <RecordCode extensions={extensions} />
    </Player>
  )
}

createRoot(document.querySelector('main')).render(<Lesson />)
