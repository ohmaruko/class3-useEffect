import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useEffect } from "react";

export default function ExampleTwo() {

    /**The [] makes sure the use Effect only runs once
     * Onc
     */
    useEffect(() => {
        console.log("RUN");
    }, [])
    return(
        <>
            <Header />
            <main>
                <h1>Example 2</h1>

            </main>
            <Footer />
        </>
    )
}