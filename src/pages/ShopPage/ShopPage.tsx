import Currency from 'components/Currency/Currency'
import ProductsList from 'components/ProductsList/ProductsList'
import './ShopPage.scss'

type Props = {}

const ShopPage = (props: Props) => {
  return (
    <>
      <section className="shop">
        <div className="shop-content">
          <h1 className="shop-content-title">Our shop page</h1>
          <Currency />
          <ProductsList />
        </div>
      </section>
    </>
  )
}

export default ShopPage
