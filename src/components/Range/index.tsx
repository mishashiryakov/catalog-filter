import React, { Dispatch, SetStateAction } from 'react';
import { IRangeObj } from '../../containers/cameras/types';
import styles from './index.module.scss';

interface IRange {
  min: number,
  max: number,
  setRange: Dispatch<SetStateAction<IRangeObj>>,
  setManualUpdate: (value: boolean) => void,
}

export const Range = (props: IRange) => {
  const { min, max, setRange, setManualUpdate } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManualUpdate(true);
    setRange(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  return (
    <div className={styles.container}>
      <input type='number' min="0" className={styles.input} value={min} name='min' onChange={onChangeHandler}/>
      <input type='number' min="0" className={styles.input} value={max} name='max' onChange={onChangeHandler}/>
    </div>
  )
}