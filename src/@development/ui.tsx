import React from 'react'

import { cpp } from '@codemirror/lang-cpp'


import {
  basicSetup,
  Buttons,
  Clear,
  CodeBooth,
  Record,
  Resize,
  Run
} from '@lqv/codebooth'
import { CodeRecording } from '@lqv/codemirror/recording'
import { javascript } from '@codemirror/lang-javascript'

function UI () {
  const content = `
      // The main function where the program execution begins
    int main() {
    // Create an instance of the Car class
    Car myCar("Toyota", "Camry", 2023);

    // Use the object's methods
    myCar.displayInfo();
    myCar.startEngine();
    myCar.startEngine(); // Trying to start it again
    myCar.stopEngine();

    return 0;
}
  `

  const extensions = React.useMemo(() => [basicSetup, cpp(), javascript()], [])

  return (
    <CodeBooth recorder={CodeRecording.recorder}>
      <Record
        content={content}
        extensions={extensions}
        filename='test.ts'
      ></Record>
    </CodeBooth>
  )
}

export default UI
