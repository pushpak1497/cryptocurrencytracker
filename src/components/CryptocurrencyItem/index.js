import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li className="list-item">
      <div className="name-container">
        <img src={currencyLogo} alt={currencyName} className="icon" />
        <p className="text name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="text usdvalue">{usdValue}</p>
        <p className="text euroValue">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
