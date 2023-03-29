import productsArray from 'utils/productsArray'
import './ProductsList.scss'

type Props = {}

const ProductsList = (props: Props) => {
  return (
    <>
      <section className="products">
        {productsArray.map((el) => (
          <div className="products-list">
            <h2 className="products-list-title">{el.title}</h2>
            <p className="products-list-description">{el.description}</p>
            <span>{el.price.usd}</span>
            <br />
            <button type="submit">Buy</button>
          </div>
        ))}
      </section>
    </>
  )
}

export default ProductsList
