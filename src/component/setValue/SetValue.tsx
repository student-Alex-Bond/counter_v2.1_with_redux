import React from 'react';
import styles from './setValue.module.css'
import InputValue from "../input/InputValue";
import Button from "../button/Button";

type setValueType = {
    error: boolean
    maxValue: number
    startValue: number
    setValue: () => void
    onChangeMaxValueCallback: (value: number) => void
    onChangeStartValueCallback: (value: number) => void
}

const SetValue = (props: setValueType) => {
    const inputStyle = {
        style: {}
    }

    const buttonStyle = {
        style: {},
        disabled: false
    }
    if (props.error || props.maxValue < 0 || props.startValue < 0 || props.maxValue < props.startValue) {
        buttonStyle.style = {opacity: '0.5'}
        buttonStyle.disabled = true
        inputStyle.style = {backgroundColor: 'red', opacity: '0.5'}
    }

    return (
        <div className={styles.set}>
            <div className={styles.inputs}>
                <InputValue inputStyle={inputStyle}
                            error={props.error}

                            value={props.maxValue}
                            onChangeValueCallback={props.onChangeMaxValueCallback}
                >Max value: </InputValue>
                <InputValue inputStyle={inputStyle}
                            error={props.error}
                            children={'START VALUE: '}
                            value={props.startValue}
                            onChangeValueCallback={props.onChangeStartValueCallback}/>
            </div>
            <div className={styles.buttons}>
                <Button  {...buttonStyle}
                        onClick={props.setValue}
                >Set</Button>
            </div>
        </div>
    );
};

export default SetValue;