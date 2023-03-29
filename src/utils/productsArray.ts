export type Product = {
  id: number
  title: string
  description: string
  price: {
    id: number
    eur: number
    usd: number
    uan: number
  }
}

const productsArray: Product[] = [
  {
    id: 1,
    title: 'iPhone 12',
    description: 'This is iPhone 12',
    price: {
      id: 1,
      eur: 750,
      usd: 700,
      uan: 26000,
    },
  },
  {
    id: 2,
    title: 'iPhone 8',
    description: 'This is iPhone 8',
    price: {
      id: 2,
      eur: 850,
      usd: 800,
      uan: 30000,
    },
  },
  {
    id: 3,
    title: 'iPhone X',
    description: 'This is iPhone X',
    price: {
      id: 3,
      eur: 1250,
      usd: 1200,
      uan: 45000,
    },
  },
]

export default productsArray
