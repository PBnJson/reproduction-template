import React, { useEffect } from 'react'

export default function testComponent() {
    useEffect(() => {
        async function callApiEndpoint() {
            for (let i = 0; i < 100; i++) {
                const response = await fetch('/api/dummyAPI');
                const data = await response.json();
                console.log(`Response ${i}:`, data);
            }
        }

        callApiEndpoint();
    }, []);
    return (
        <div>
            <h1><p>Testing sw change take 1</p></h1>
        </div>
    )
}
