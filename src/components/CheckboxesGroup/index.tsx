import React, { Dispatch, SetStateAction }  from 'react';
import { IBrand, IBrandsObj } from '../../pages/cameras/types';
import { Checkbox } from '../Checkbox';
import styles from './index.module.scss';

interface ICheckboxesGroup {
  values: IBrandsObj,
  setBrands: Dispatch<SetStateAction<IBrandsObj>>,
  setManualUpdate: (value: boolean) => void
}

export const CheckboxesGroup = (props: ICheckboxesGroup) => {
  const { values, setBrands, setManualUpdate } = props;

  const onChangeHandler = (name: string, checked: boolean, value: string) => {
    setManualUpdate(true);
    setBrands(prev => {
      return { ...prev, [name]: {main: !checked, value, title: name}}
    })
  }

  const checkboxes = Object.values(values);

  return (
    <div>
      {
        checkboxes.map(brand =>
          <div className={styles.container} key={brand.title}>
            <Checkbox checked={brand.main} className={styles.checkbox} onChange={onChangeHandler} name={brand.title} value={brand.value}/>
            <span className={styles.brandName}>{brand.title}</span>
          </div>
        )
      }
    </div>
  )
}