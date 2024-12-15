import React from 'react'
let myName = 'beerah'
let mySyle = {color:'blue', backgroundColor:'purple'}
const Navbar = () => {
  return (
    <>
        <h1 style={mySyle}>I'm  a navbar</h1>
        <h2 className='bg-warning'>hello {myName}</h2>
        <h3>{Math.random()}</h3>
    </>
  )
}
export default Navbar;

