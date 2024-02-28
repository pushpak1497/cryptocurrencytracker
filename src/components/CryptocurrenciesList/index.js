import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {details: [], isLoading: true}

  componentDidMount = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    console.log(updatedData)
    this.setState({
      details: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {details, isLoading} = this.state
    console.log(details)
    return (
      <div className="bg-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader />
          </div>
        ) : (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="currencies-container">
              <div className="table-heading-container">
                <p className="text">Coin Type</p>
                <div className="type-container">
                  <p className="text usd">USD</p>
                  <p className="text euro">EURO</p>
                </div>
              </div>
              <ul className="list-container">
                {details.map(each => (
                  <CryptocurrencyItem currencyDetails={each} key={each.id} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
