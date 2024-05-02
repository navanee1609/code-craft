import { createContext, useContext } from "react"
import { v4 } from "uuid";

export const PlaygroundContext = createContext()

const initData = [
    {
        id:v4(),
        title: 'DSA',
        files:[
            {
                id:v4(),
                title: 'index',
                code: `cout<<"hello world";`,
                language: 'cpp'
            }
        ]
    }
]
export const PlaygroundProvider = ({children})=>{
   const obj={name: 'navaneethan'} ;
    return (
        <PlaygroundContext.Provider value={obj}>
            {children}
        </PlaygroundContext.Provider>
    )
}