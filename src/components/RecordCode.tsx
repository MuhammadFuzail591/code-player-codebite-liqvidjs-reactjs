import React from 'react'
import type { Extension } from '@codemirror/state'
import { CodeBooth, Console, Record, Resize } from '@lqv/codebooth'
import RunCode from './RunCode'

type Props = {
  content?: string
  extensions: Extension[]
}

function RecordCode ({ content, extensions }: Props) {
  return (
    <CodeBooth>
      <Record content={content} extensions={[...extensions]} filename='' />
      <Resize />
      <RunCode />
      <Console />
    </CodeBooth>
  )
}

export default RecordCode
