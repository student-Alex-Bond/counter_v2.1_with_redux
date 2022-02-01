import React from 'react';
import styles from './button.module.css'
type buttonPropsType = {
    children: string
    onClick?: ()=> void
}

const Button = (props: buttonPropsType) => {
    return (
        <button className={styles.button} {...props}/>
    );
};

export default Button;