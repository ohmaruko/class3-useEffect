import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);
    /usially this will cause an infinit loop so it is
    //best to not do this in case your code breaks
    // useEffect(() => {
    //     console.log(number);
    // })
    return(
        <>
            <Header />
            <main>
                <h1>Example 1</h1>
                <div>Infinit loop</div>
                {number}
            </main>
            <Footer />
        </>
    )
}