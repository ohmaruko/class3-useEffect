import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


//we want to set up a counter
//after every one second the number increases by 1
//we want to display that numbse on screeen as it increases
//no button needed it will update number automatically
export default function ExampleFive() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        var interval;
        interval = setInterval(() => {
            setNumber(number + 1);
        }, 1000);
    }, [number])

    return(
        <>
            <Header />
            <main>
                {number}
            </main>
            <Footer />
        </>
    )
}