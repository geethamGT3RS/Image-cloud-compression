import React from 'react'
import GoogleButton from 'react-google-button'
import {getAuth , signInWithPopup , GoogleAuthProvider} from 'firebase/auth'

export default function Auth() {
  let auth = getAuth();
  let googleprovider = new GoogleAuthProvider();
  const signUp = ()=>{
    signInWithPopup(auth,googleprovider)
    .then(res => {console.log(res.user)})
    .catch(err => {console.log(err.message)})
  }
  return (
    <div className='auth-btn'>
        <h2>Sign In Options</h2>
        <GoogleButton onClick={() => { console.log('Google button clicked') }} />
    </div>
  )
}
