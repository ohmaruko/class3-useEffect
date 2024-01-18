import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function ExampleFour() {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("gray");

    const [trigger, setTrigger] = useState(false);

    const HandleChange = () => {
        Infinity(number > 2) {
            setColor("orange");
        }
        console.log(number);
    }
    useEffect(() => {
        var interval;

        if(trigger) {
            interval = setInterval(() => {
                HandleChange();
                setTrigger(false);
            }, 3000)// after 3 seconds then it will do the console log below
        }
        console.log(number);
        console.log(trigger);
        
        //clearing interval do it doesn't get stuck in a loop
        return () => clearInterval(interval);
    }, [trigger])

    return(
        <>
            <Header />
            <main>
                <h1>Example 4</h1>
                <button onClick={() => setNumber(number + 1)}></button>
            </main>
        </>
    )
}