import React from "react"

function Tickler () {
  function tickle () {
    console.log("Teehee!")
  }
  /** the event handler in react is SyntheticEvent  */

  return <button onClick={tickle}>Tickle me!</button>
}

export default Tickler
