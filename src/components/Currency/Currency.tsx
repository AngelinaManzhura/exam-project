import './Currency.scss'

type Props = {}

const Currency = (props: Props) => {
  return (
    <>
      <section className="currency">
        <ul className="currency-list">
          <li className="currency-list-item">
            <button type="submit">USD</button>
          </li>
          <li className="currency-list-item">
            <button type="submit">EUR</button>
          </li>
          <li className="currency-list-item">
            <button type="submit">UAH</button>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Currency
