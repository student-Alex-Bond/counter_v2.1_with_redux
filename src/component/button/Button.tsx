import React, { FC } from 'react';
import styles from './button.module.css'
type buttonPropsType = {
    onClick?: ()=> void
}

const Button: FC<buttonPropsType> = (props) => {
    return (
        <button className={styles.button} {...props}/>
    );
};

export default Button;