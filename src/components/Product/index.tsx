import React from 'react';
import { IProduct } from '../../pages/cameras/types';
import { Button } from '../Button';
import styles from './index.module.scss';

const BUTTON_TITLE = 'В корзину';

export const Product = (props: IProduct) => {
  const { title, price, image } = props;

  return (
    <div className={styles.container}>
      <img src={image.desktop.x1} className={styles.image}/>
      <div className={styles.infoBlock}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>{price} ₽</span>
        <Button title={BUTTON_TITLE} />
      </div>
    </div>
  )
}