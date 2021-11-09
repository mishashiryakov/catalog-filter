import React from 'react';
import { IProduct } from '../../containers/cameras/types';
import { Button } from '../Button';
import LazyLoad from 'react-lazyload';
import styles from './index.module.scss';

const BUTTON_TITLE = 'В корзину';

export const Product = (props: IProduct) => {
  const { title, price, image } = props;

  return (
    <div className={styles.container}>
      <LazyLoad height={120}>
        <img src={image.desktop.x1} className={styles.image} alt={title}/>
      </LazyLoad>
      <div className={styles.infoBlock}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>{price} ₽</span>
        <Button title={BUTTON_TITLE} />
      </div>
    </div>
  )
}