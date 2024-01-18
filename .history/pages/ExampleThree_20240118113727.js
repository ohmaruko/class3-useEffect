import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree() {

    const [number, setNumber] = useState(0);

    const colours = ["red", "orange", "yellow", "green", "blue", "violet"];

    useEffect(() => {
        console.log("Changing number value: " + colours[number])
    }, [number]
    if (number == array.length){
        console.log(colours);

    })

    return(
        <>
            <Header />
            <main>
                <h1>Example 3</h1>
                <button
                    style={{backgroundColor: colours[number]}}
                    onClick={() => setNumber(number + 1)}>
                        Increment Number
                </button>
                <div>
                    {number}
                </div>
            </main>
            <Footer />
        </>
    )
}