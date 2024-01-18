import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);
    /** */ usially this will cause an infinit loop so it is
    * best to not do this in case your code breaks
    * code on page will run two times.
    * Once to render what we want and another is to render
    * strict mode to dind any common bugs
    */
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