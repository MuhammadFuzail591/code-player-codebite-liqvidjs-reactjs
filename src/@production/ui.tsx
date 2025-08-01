import { useEffect, useState } from 'react'
import { loadJSON } from '@liqvid/utils/json'
import { CodeBooth, Replay } from '@lqv/codebooth'
import { cmReplay } from '@lqv/codemirror'
import { content } from '../@development/ui'
import ReplayCode from '../components/ReplayCode'

declare module '@liqvid/utils/json' {
  interface GetJSONMap {
    code: Parameters<typeof cmReplay>[0]['data']
  }
}

console.log('Hi there')

export function UI () {
  const [data, setData] = useState<
    Parameters<typeof cmReplay>[0]['data'] | null
  >(null)

  useEffect(() => {
    loadJSON('code')
      .then(json => {
        console.log('Replay data loaded:', json)
        setData(json)
      })
      .catch(err => {
        console.error('Failed to load replay data:', err)
      })
  }, [])

  if (!data) return <div>Loading replay...</div>

  return <ReplayCode replay={loadJSON('code')} language_id={63} />
}
