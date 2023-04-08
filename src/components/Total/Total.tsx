import { useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import './Total.scss'

type Props = {}

const Total = (props: Props) => {
  const productsCart = Object.values(
    useAppSelector((state: RootState) => state.productsCart)
  )

  const currentCurrency = useAppSelector(
    (state) => state.currencyReducer.currency
  )

  const exchangeRates = useAppSelector(
    (state) => state.currencyReducer.exchangeRates
  )

  return (
    <section className="total">
      <h3>
        Total:{' '}
        <ul className="product-list">
          {productsCart.map((el) => (
            <li className="product-list-item">
              <span>
                {el.title}: {el.qty}
              </span>
            </li>
          ))}
        </ul>
        {productsCart.reduce(
          (total, product) => total + product.price.amount * product.qty,
          0
        ) * exchangeRates[currentCurrency]}{' '}
        {currentCurrency}
      </h3>
    </section>
  )
}

export default Total
