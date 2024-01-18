import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


//we want to set up a counter
//after every one second the number increases by 1
//we want to display that numbse on screeen as it increases
//no button needed it will update number automatically
export default function ExampleFive() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     var interval;
    //     interval = setInterval(() => {
    //         setCount(count + 1);
    //     }, 1000);
    // }, [count])

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