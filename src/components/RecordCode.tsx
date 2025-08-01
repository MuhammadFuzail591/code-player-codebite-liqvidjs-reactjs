import React from 'react'
import type { Extension } from '@codemirror/state'
import {
  Buttons,
  Clear,
  CodeBooth,
  Console,
  Record,
  Resize,
  Run
} from '@lqv/codebooth'
import RunCode from './RunCode'
import { CodeRecording } from '@lqv/codemirror/recording'

type Props = {
  content?: string
  extensions: Extension[]
}

function RecordCode ({ content, extensions }: Props) {
  const [language, setLanguage] = React.useState(63)

  const handleSelectChange = e => {
    console.log(e.target.value)
    setLanguage(e.target.value)
  }

  return (
    <>
      <CodeBooth recorder={CodeRecording.recorder}>
        <select
          className='lang-dropdown'
          value={language}
          onChange={handleSelectChange}
          style={{
            width: '200px',
            height: '30px',
            position: 'absolute',
            right: '0px'
          }}
        >
          <option value='71'>Python</option>
          <option value='63'>JavaScript</option>
          <option value='54'>C++</option>
          <option value='62'>Java</option>
          <option value='50'>C</option>
        </select>
        <Record content={content} extensions={[...extensions]} filename='' />
        <Resize />
        <RunCode language_id={language} />
        <Console />
        <Buttons
          style={{
            zIndex: '100'
          }}
        >
          <Run onClick={() => console.log('Run Clicked')} />
          <Clear onClick={() => console.log('Clear Clicked')} />
        </Buttons>
      </CodeBooth>
    </>
  )
}

export default RecordCode
