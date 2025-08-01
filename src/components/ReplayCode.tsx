import React from 'react'
import { content } from '../@development/ui'
import { Extension } from '@codemirror/state'
import {
  basicSetup,
  Buttons,
  Clear,
  CodeBooth,
  Console,
  Copy,
  Editor,
  EditorGroup,
  Replay,
  Resize,
  Run,
  Tab,
  TabList
} from '@lqv/codebooth'
import RunCode from './RunCode'

type Props = {
  children?: React.ReactNode

  content?: string

  extensions?: Extension

  replay: React.ComponentProps<typeof Replay>['replay']

  language_id: number

  start?: number
}

function ReplayCode (props: Props) {
  const { extensions = [] } = props

  return (
    <CodeBooth>
      <EditorGroup id='replay'>
        <Replay
          content={props.content}
          extensions={[basicSetup]}
          filename='untitled.py'
          replay={props.replay}
          start={props.start}
        />
      </EditorGroup>
      <EditorGroup id='playground'>
        <Editor
          content={props.content}
          extensions={[basicSetup]}
          filename='untitled.py'
        />
      </EditorGroup>
      <Resize />
      <RunCode language_id={props.language_id} />
      <Console />
      <Buttons>
        <TabList>
          <Tab id='replay'>Replay</Tab>
          <Tab id='playground'>Playground</Tab>
        </TabList>
        <Copy from='replay' to='playground' />
        <Run />
        <Clear />
      </Buttons>
      {props.children}
    </CodeBooth>
  )
}

export default ReplayCode
