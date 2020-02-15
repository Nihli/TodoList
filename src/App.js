import React from 'react'
import TodoList from './TodoList'

class App extends React.Component {
    render(){
        return (
            <div>
                We created our first component!
                <TodoList />
            </div>
        )
    }
}

// const App =() => {
//     return (
//         <div>
//             We created another react Component!
//         </div>
//     )
// }

export default App