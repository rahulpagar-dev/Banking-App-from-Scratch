import React from 'react'
import "./Account.css"
function Account() {
  return (
      <div className='Gcontainer'>
    <div className='ParentContainer'>
      <h1 className='title is-1'>Account Balance</h1>
      <h2> Current Account Bal:</h2>
      <div className='mt-5 px-5'>
      <input type="text" className='input is-primary' id="Acc" placeholder='Enter Amount'/>
      </div>
      <div className='mt-5'>
          <button className='button is-success is-light mr-2'> DEPOSIT </button>
          <button className='button is-primary mr-2'> WITHDRAW</button>
          <button className='button is-link mr-2'>INTEREST</button>
          <button className='button is-primary mr-2'>SWITCH Account</button>
      </div>
    </div>
    </div>
  )
}

export default Account
