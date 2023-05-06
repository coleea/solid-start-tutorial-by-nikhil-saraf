import { createSignal } from "solid-js"
import server$ from "solid-start/server"

const someServerAction = server$((arg) => {
    console.log('this is called on server');        
    console.log(`hello ${arg}`);
    
    return "hello"
})

export default function Counter() {
    
    const [count, setcount] = createSignal(0)

    return (
        <button onclick={()=> {
            setcount(_ => _ + 1)
            someServerAction("lkb")
        }}>
            click : {count()}
        </button>
    )
}