import '../../styles/statCard.scss'
import PropTypes from "prop-types"
import { getStat } from './useStat'

/**
 * Component which builds cards
 * @param {Object[]} props.keyData image source
 * @param {String} props.keyData[].text
 * @param {String} props.keyData[].img data about user macronutriments
 * @param {String} props.keyData[].acr acronym for macronutriments
 * @returns {Component} card to display
 */

export default function StatCard(props) {
  return (
    <div className="statCard">
      <img src={getStat(props.keyData).img} alt="icon" />
      <div className='statCard__info'>
        <p className='number'>{props.keyData[1]}{getStat(props.keyData).acr}</p>
        <p className='text'>{getStat(props.keyData).text}</p>
      </div>
    </div>
  )
}

StatCard.propTypes = {
  keyData: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
}