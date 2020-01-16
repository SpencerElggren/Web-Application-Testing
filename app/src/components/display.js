import React, {useEffect} from "react";
import {useStrikes} from "../hooks/useStrikes";
import {useBalls} from "../hooks/useBalls";

const Display = () => {
    const [strikes, setStrikes] = useStrikes('strikes');
    const [balls, setBalls] = useBalls('balls');

    return (
        <div className={'display'}>
            <div className={'box'}>
                Strikes= {strikes}
            </div>
            <div className={'box'}>
                Balls= {balls}
            </div>
        </div>
    )

};

export default Display;