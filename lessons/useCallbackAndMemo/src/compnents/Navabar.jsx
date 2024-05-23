import React from 'react'
import { memo } from 'react'

function Navabar({ adjectice, getAdjective }) {
  console.log('Navabr render');
  return (
    <>
      <div>I am a {adjectice} navabar <button >{getAdjective()}</button>
      </div>
    </>
  )
}

export default memo(Navabar)