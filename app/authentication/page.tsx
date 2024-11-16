import React from 'react'
import AuthenticationContainer from '../components/Authentication/AuthenticationContainer/AuthenticationContainer';
import "../components/Authentication/Authentication.css";

const page = () => {
  return (
    <>
      <div className="authentication-page w-full h-full flex flex-col">
        <AuthenticationContainer />
      </div>
    </>
  )
}

export default page;