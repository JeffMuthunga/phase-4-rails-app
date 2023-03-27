import React from 'react'

function NavBar() {
  return (
    <header>
        <h1>Pledge up</h1>
        <h2>campaigns</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            + add campaign
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
        </button>
        

    </header>
  )
}

export default NavBar