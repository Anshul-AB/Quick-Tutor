import React from 'react'
import useScreen from './custom-hooks/useScreen'

const ScreenSize = () => {
    const screenSize = useScreen('')
  return (
    <div>
      <div className='border pad'>
        Screen size - {screenSize}
      </div>
    </div>
  )
}

export default ScreenSize
