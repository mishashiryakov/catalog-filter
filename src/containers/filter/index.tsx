import React, { Dispatch, SetStateAction } from 'react';
import { CheckboxesGroup } from '../../components/CheckboxesGroup';
import { Range } from '../../components/Range';
import { IBrandsObj, IRangeObj } from '../cameras/types';
import styles from './index.module.scss';

interface IFilterContainer {
  title: string,
  brands: IBrandsObj,
  setBrands: Dispatch<SetStateAction<IBrandsObj>>,
  range: IRangeObj,
  setRange: Dispatch<SetStateAction<IRangeObj>>,
  setManualUpdate: (value: boolean) => void
}

export const FilterContainer = (props: IFilterContainer) => {
  const { title, brands, setBrands, range, setRange, setManualUpdate } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.price}>Цена, ₽</p>
      <Range
        min={Math.round(Number(range.min))}
        max={Math.round(Number(range.max))}
        setRange={setRange}
        setManualUpdate={setManualUpdate}
      />
      <p className={styles.brand}>Бренд</p>
      <CheckboxesGroup values={brands} setBrands={setBrands} setManualUpdate={setManualUpdate}/>
    </div>
  )
}