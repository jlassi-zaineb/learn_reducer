import React, {useEffect} from 'react';
import { getAllTopic } from '../functions/functions';

function Home() {

    useEffect(() => {
        console.log(getAllTopic())
    }, [])

    return (
        <div className="border">
            <h1 className="text-info">HomePage</h1>
        </div>
    )
}

export default Home
