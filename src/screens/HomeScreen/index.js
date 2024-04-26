import './index.scss'
import RightComponent from './RightComponent/index.js'
export const HomeScreen=()=>{
    return (
        <div className='home-container'>
            <div className='left-container'>
                <div className='item-container'>
                <img src='logo.png' alt='logo'/>
                <h1>Code-Craft</h1>
                <h2>Code.Compile.Debug</h2>
                <button>
                    <span className='material-icons'>add</span>
                    <span>new playground</span>
                </button>
                </div>
                
            </div>
            <RightComponent/>

        </div>
    )
}