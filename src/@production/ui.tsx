import { loadJSON } from '@liqvid/utils/json'
import { Replay } from '@lqv/codebooth'
import { cmReplay } from '@lqv/codemirror'

declare module '@liqvid/utils/json' {
  interface GetJSONMap {
    code: Parameters<typeof cmReplay>[0]['data']
  }
}

console.log('Hi there')

export function UI () {
  return <Replay replay={loadJSON('code')} start={0} filename='code.cpp' />
}
