import React from 'react'
import './index.scss'
function index() {
  return (
    <div className='right-container'>
      <div className='header'>
       <div className='title'>
        <span>My</span> Playground
       </div>
        <button className='add-folder'>
          <span className='material-icons'>add</span>
          <span>New Folder</span>
        </button>
      </div>
      <div className='folder-container'>
        <div className='folder-header'>
        <div className='folder-header-item'>
          <span className='material-icons' style={{color:'#ffca29'}}>folder</span>
          <span>{"DSA"}</span>
        </div>
        <div className='folder-header-item'>
          <span className='material-icons'>delete</span>
          <span className='material-icons'>edit</span>
          <button>
            <span className='material-icons'>add</span>
            <span>New Playground</span>
          </button>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default index