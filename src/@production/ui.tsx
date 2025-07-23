import { useEffect, useState } from 'react'
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

  return <h1>Hi there I am Fuzail From codebite</h1>
  // return <Replay replay={loadJSON('code')} />
}
