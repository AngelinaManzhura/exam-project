export type Product = {
  id: number
  title: string
  description: string
  price: {
    amount: number
    currency: string
  }
}

const productsArray: Product[] = [
  {
    id: 1,
    title: 'iPhone 12',
    description: 'This is iPhone 12',
    price: {
      amount: 700,
      currency: 'USD',
    },
  },
  {
    id: 2,
    title: 'iPhone 8',
    description: 'This is iPhone 8',
    price: {
      amount: 800,
      currency: 'USD',
    },
  },
  {
    id: 3,
    title: 'iPhone X',
    description: 'This is iPhone X',
    price: {
      amount: 1200,
      currency: 'USD',
    },
  },
]

export default productsArray
