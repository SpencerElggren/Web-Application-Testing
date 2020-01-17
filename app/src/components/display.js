import React, {useEffect} from "react";
import {useStrikes} from "../hooks/useStrikes";
import {useBalls} from "../hooks/useBalls";

const Display = (props) => {

    return (
        <div className={'display'}>
            <div className={'box'}>
                Strikes= {props.strikes}
            </div>
            <div className={'box'}>
                Balls= {props.balls}
            </div>
        </div>
    )

};

export default Display;