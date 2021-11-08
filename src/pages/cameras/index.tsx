import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { FilterContainer } from "../../containers/filter";
import { Goods } from "../../containers/goods";
import { executeRequest } from "../../utils";
import { API, MOCK_LOGIN, MOCK_PASSWORD } from "../../constants/index";
import styles from "./index.module.css";
import { IBrand, IBrandsObj, IProduct, IRangeObj, IResponseData, IUrlParams } from "./types";
import { Spinner } from "../../components/Spinner";

let timer: any;

const CamerasPage = ({}) => {
  const router = useRouter();
  const [brands, setBrands] = useState<IBrandsObj>({});
  const [range, setRange] = useState<IRangeObj>({ min: "0", max: "0" });
  const [manualUpdate, setManualUpdate] = useState<boolean>(false)
  const [responseData, setResponseData] = useState<IResponseData>({
    isLoading: false,
    error: null,
    products: [],
  });

  const getParamsFromUrl = (url: string) => {
    let searchParams = new URLSearchParams(url);
    let params: IUrlParams = {};
    for (let [key, value] of searchParams) {
      if (params[key]) {
        params[key].push(value);
      } else {
        params[key] = [value];
      }
    }
    
    return params;
  };

  useEffect(() => {
    let path = window.location.href;
    const url = path.slice(path.indexOf("?") + 1);
    let params = getParamsFromUrl(url);
    let min = '0';
    let max = '0';

    if(params?.['price[min]']) {
      min = params['price[min]'][0];
    }

    if(params?.['price[max]']) {
      max = params['price[max]'][0];
    }

    setRange({ min, max });
    setResponseData({ isLoading: true, error: null, products: [] });

    executeRequest(API, MOCK_LOGIN, MOCK_PASSWORD, url)
      .then((res) => {
        const brandsObject = res.filters[3].items.reduce(
          (acc: IBrandsObj, brand: IBrand) => {
            if (params?.["brands[]"]?.includes(brand.value)) {
              brand.main = true;
            } else {
              brand.main = false;
            }

            acc[brand.title] = brand;
            return acc;
          },
          {}
        );

        setBrands(brandsObject);
        setResponseData({ isLoading: false, error: null, products: res.products })
      })
      .catch(err => setResponseData({ isLoading: false, error: err.message, products: [] }))
  }, []);

  const generateUrl = () => {
    let url = new URLSearchParams('');
    for (let key in brands) {
      let brand = brands[key];
      if (brand.main) {
        url.append('brands[]', brand.value)
      }
    }

    if(+range.min > 0) {
      url.set('price[min]', range.min); 
    }

    if(+range.max > 0) {
      url.set('price[max]', range.max)
    }
    
    return url.toString();
  };

  const manualUpdateData = () => {
    const url = generateUrl();
    if(url.length > 0) {
      router.push(`?${url}`)
    } else {
      router.push('')
    }
    setResponseData({ isLoading: true, error: null, products: [] });
    executeRequest(API, MOCK_LOGIN, MOCK_PASSWORD, url)
      .then(res => setResponseData({ isLoading: false, error: null, products: res.products }))
      .catch(err => setResponseData({ isLoading: false, error: err.message, products: [] }))
  }

  useEffect(() => {
    if(manualUpdate) {
      clearTimeout(timer)
      timer = setTimeout(manualUpdateData, 420)
    }
  }, [brands, range, manualUpdate]);

  return (
    <div className={styles.container}>
      <FilterContainer
        title={"Камеры"}
        brands={brands}
        setBrands={setBrands}
        range={range}
        setRange={setRange}
        setManualUpdate={setManualUpdate}
      />
      {
        responseData.isLoading 
        ? <Spinner/>
        : responseData.error 
          ? <p className='error'>Ошибка при загрузке данных: {responseData.error}</p>
          : responseData.products.length 
            ? <Goods products={responseData.products} />
            : <p>Нет данных</p>
      }
    </div>
  );
};

export default CamerasPage;
