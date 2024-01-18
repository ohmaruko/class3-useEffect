import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


//we want to set up a counter
//after every one second the number increases by 1
//we want to display that numbse on screeen as it increases
export default function ExampleFive() {
    const [number, setNumber] = useState(0);

    useEffect(() => {

    }, [number])

    return(
        <>
            <Header />
            <main>

            </main>
            <Footer />
        </>
    )
}