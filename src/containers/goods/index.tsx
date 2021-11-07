import React from "react";
import { Product } from "../../components/Product";
import { IProduct } from "../../pages/cameras/types";
import styles from './index.module.scss';

interface IGoods {
  products: IProduct[];
}

export const Goods = (props: IGoods) => {
  const { products } = props;
  return (
    <div className={styles.container}>
      {products.map((product) => 
        <Product key={product.id} {...product}/>
      )}
    </div>
  );
};
