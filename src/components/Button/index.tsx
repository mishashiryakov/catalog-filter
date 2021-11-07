import React from 'react';
import styles from './index.module.scss';

interface IButton {
  title: string
}

export const Button = (props: IButton) => {
  const { title } = props;

  return (
    <button className={styles.button}>{title}</button>
  )
}