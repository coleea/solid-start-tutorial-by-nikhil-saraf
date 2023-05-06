import { createSignal } from "solid-js"
import server$ from "solid-start/server"

const someServerAction = server$(() => {
    console.log('this is called on server');        
    return "hello"
})

export default function Counter() {
    
    const [count, setcount] = createSignal(0)

    return (
        <button onclick={()=> setcount(_ => _ + 1)}>
            click : {count()}
        </button>
    )
}