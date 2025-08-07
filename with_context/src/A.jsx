import React, { createContext } from "react"
import B from "./B"

const GreetContext = createContext(); // ✅ Good

export default function A() {
    const greet = "Hello"; // ✅ Context value
    const greet2 = "Hello"; // ✅ Context value

    return (
        <div>
            <GreetContext.Provider value={greet}>
                <B />
            </GreetContext.Provider>
        </div>
    );
}

export { GreetContext }; // ✅ Exporting it for other components like C
