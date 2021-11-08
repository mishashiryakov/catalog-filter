export interface IProduct {
  id: number,
  title: string,
  price: string,
  image: {
    desktop: {
      x1: string
    }
  }
}

export interface IBrand {
  main: boolean
  title: string
  value: string
}

export interface IBrandsObj {
  [key: string]: IBrand
}

export interface IRangeObj {
  min: string, 
  max: string
}

export interface IUrlParams {
  [key: string]: string[],
}

export interface IResponseData {
  isLoading: boolean, 
  error: string | null, 
  products: IProduct[]
}
