// import React from 'react'
import {Button} from  'antd' 
import {HiOutlineSun,HiOutlineMoon } from 'react-icons/hi'
const ToggleThemeButton = ({fnDarkTheme,bIsDark}) => {
  return (
    <div className='toggle-theme-btn'>
<Button onClick={fnDarkTheme}>  { bIsDark?<HiOutlineSun/>:<HiOutlineMoon/>  }</Button>
    </div>
  )
}

export default ToggleThemeButton