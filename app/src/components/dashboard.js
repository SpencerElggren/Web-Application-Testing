import React, {useState} from "react";
import {useStrikes} from "../hooks/useStrikes";
import {useBalls} from "../hooks/useBalls";
import {useFouls} from "../hooks/useFouls";
import Display from "./display";

const Dashboard = () => {
    const [strikes, setStrikes] = useStrikes('strikes');
    const [balls, setBalls] = useBalls('balls');
    const [fouls, setFouls] = useFouls('fouls');
    const [stats, setStats] = useState({
        strikes: strikes,
        balls: balls,
        fouls: fouls
    });

    const hitButton = e => {
        console.log(strikes);
        e.preventDefault();
        setStats({
            balls: 0,
            strikes: 0,
            fouls: 0
        });
        setBalls(0);
        setStrikes(0);
        setFouls(0);
    };
    const strikeButton = e => {
        e.preventDefault();
        console.log(strikes);
        if (strikes <= 1) {
            setStats({
                strikes: strikes+1
            });
            setStrikes(strikes + 1);
        } else {
            setStats({
                balls: 0,
                strikes: 0,
                fouls: 0
            });
            setBalls(0);
            setStrikes(0);
            setFouls(0);
        }
    };
    const ballButton = e => {
        e.preventDefault();
        console.log(balls);
        if (balls < 3) {
            setBalls(balls + 1)
        } else {
            setBalls(0);
            setStrikes(0);
            setFouls(0);
        }
    };
    const foulButton = e => {
        e.preventDefault();
        console.log(fouls);
        if (strikes < 2) {
            setFouls(fouls + 1);
            setStrikes(strikes + 1);
        } else {
            setFouls( fouls + 1);
        }

    };

    return (
        <div className={'dash'}>

            <Display balls={balls} strikes={strikes}/>

            <button onClick={hitButton}>Hit!</button>
            <button onClick={strikeButton}>Strike!</button>
            <button onClick={ballButton}>Ball!</button>
            <button onClick={foulButton}>Foul!</button>
        </div>
    )

};

export default Dashboard;