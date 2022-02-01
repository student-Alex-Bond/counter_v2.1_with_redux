import React, {ChangeEvent, FC} from 'react';
import styles from './inputValue.module.css'

type inputType = {
    inputStyle:{ style: {backgroundColor?: string, opacity?: string}, disabled?: boolean}
    error: boolean
    value: number
    onChangeValueCallback: (value: number) => void
}

const InputValue: FC<inputType> = (props) => {
    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValueCallback(event.currentTarget.valueAsNumber)
    }

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>{props.children}</span>
            <input {...props.inputStyle}
                   className={styles.values}
                   type={"number"}
                   onChange={onChangeValue}
                   value={props.value}
            />

        </div>
    );
};

export default InputValue;