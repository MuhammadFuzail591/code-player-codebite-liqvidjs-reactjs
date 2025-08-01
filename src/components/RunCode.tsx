import { useBoothStore } from '@lqv/codebooth'
import React, { useEffect } from 'react'
import { handleCompile, checkStatus } from '../utils/executeCode'

type Props = {
  language_id: number
}

function RunCode ({ language_id }: Props) {
  const store = useBoothStore()

  useEffect(() => {
    return store.subscribe(
      state => state.run,
      async () => {
        const state = store.getState()
        console.log(state)
        const view = state?.getActiveView()
        console.log(view)
        const code = view?.state?.doc?.toString()
        console.log(code)

        let output: React.ReactNode[] = []

        try {
          const res = await handleCompile(language_id, code)
          console.log(res)
          output = [<pre key={Math.random()}>{res}</pre>]
          console.log(output)
        } catch (err) {
          console.log('Any error', err)
        }

        store.setState(prev => ({
          messages: [...prev.messages, ...output]
        }))
      }
    )
  }, [store, language_id])
  return null
}

export default RunCode
