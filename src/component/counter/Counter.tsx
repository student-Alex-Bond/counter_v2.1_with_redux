import React from 'react';
import Button from "../button/Button";
import styles from './counter.module.css'

type counterType = {
    startValue: number
    maxValue: number
    value: number
    increment: () => void
    reset: () => void
    isViewMessage: boolean
}

const Counter = (props: counterType) => {
    const buttonStyleInc = {
        style: {},
        disabled: false
    }
    const buttonStyleReset = {
        style: {},
        disabled: false
    }

    const redCount ={
        style: {}
    }

    if (props.value === props.maxValue){
        redCount.style = {color: 'red', fontSize: '110px'}
        buttonStyleInc.disabled = true
        buttonStyleInc.style = {opacity: '0.5'}
    }

    if(props.isViewMessage || props.maxValue < 0 || props.startValue < 0 || props.maxValue < props.startValue){
        buttonStyleInc.disabled = true
        buttonStyleInc.style ={opacity: '0.5'}

        buttonStyleReset.disabled = true
        buttonStyleReset.style ={opacity: '0.5'}
    }

    return (
        <div className={styles.counter}>
            <span className={styles.count} {...redCount}>{props.isViewMessage
                ? <span style={{fontSize: '40px', color: 'red'}}>incorrect value</span>
                : props.value}</span>
            <div className={styles.buttons}>
                <Button {...buttonStyleInc}
                        onClick={props.increment}
                        children={'increment'}/>
                <Button {...buttonStyleReset}
                        onClick={props.reset}
                        children={'reset'}/>
            </div>

        </div>
    );
};

export default Counter;