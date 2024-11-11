
import React from 'react'
import GridComponent from '../components/Hero'
import LoginForm from '../components/Signup';
export const GetStarted = () => {
  return (
    <div>      <GridComponent 
    title="Login" 
    description="This is a responsive grid background." 
    buttonText="djkfj"
    buttonColor="bg-blue-500" 
  />

  <LoginForm/>

  
  </div>
  )
}
export default GetStarted;