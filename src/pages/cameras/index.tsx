
import React, { useEffect, useState } from 'react';
import { FilterContainer } from '../../containers/filter';
import { Goods } from '../../containers/goods';
import { executeRequest } from '../../utils';
import { API, MOCK_LOGIN, MOCK_PASSWORD } from '../../constants/index';
import styles from './index.module.css';
import { IBrand, IBrandsObj, IProduct, IRangeObj } from './types';

const CamerasPage = ({}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [brands, setBrands] = useState<IBrandsObj>({});
  const [range, setRange] = useState<IRangeObj>({min: '0', max: '0'})

  useEffect(() => {
    executeRequest(API, MOCK_LOGIN, MOCK_PASSWORD).then(res => {
      const brandsObject = res.filters[3].items.reduce((acc: IBrandsObj, brand: IBrand) => {
        acc[brand.title] = brand;
        return acc;
      }, {})

      
      setRange({min: res.filters[0].min, max: res.filters[0].max})
      setBrands(brandsObject);
      setProducts(res.products);
    })
  }, [])

  return (
    <div className={styles.container}>
      <FilterContainer title={'Камеры'} brands={brands} setBrands={setBrands} range={range} setRange={setRange}/>
      {
        products.length
          ? <Goods products={products} />
          : null
      }
    </div>
  );
  
}



export default CamerasPage;
