import { createSignal } from "solid-js"
import server$ from "solid-start/server"

const someServerAction = server$((arg) => {
    console.log('this is called on server');        
    console.log(`hello ${arg}`);
    
    
    console.log(JSON.stringify(() => console.log('i am function')));
    
    console.log(JSON.stringify(new Date()));
    
    // return Math.random()
    return {
        a : '1',
        b : "hello",
        fn : () => console.log('i am function'),
        c : new Date()
    }
})

export default function Counter() {
    
    const [count, setcount] = createSignal(0)

    return (
        <button onclick={()=> {
            setcount(_ => _ + 1)
            someServerAction("lkb").then(console.log)
            
        }}>
            click : {count()}
        </button>
    )
}