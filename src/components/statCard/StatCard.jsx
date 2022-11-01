import '../../styles/statCard.scss'

export default function StatCard(props) {
    const getStat = (keydata) => {
		let icon = ''
        let kind = ''
		let acronym = ''
		switch (keydata[0]) {
			case 'calorieCount':
				icon = require('../../assets/img/calories-icon.png')
                kind = 'Calories'
				acronym = 'Kcal'
				break
			case 'proteinCount':
				icon = require('../../assets/img/protein-icon.png')
                kind = 'Protéines'
				acronym = 'g'
				break
			case 'carbohydrateCount':
				icon = require('../../assets/img/carbs-icon.png')
                kind = 'Glucides'
				acronym = 'g'
				break
			case 'lipidCount':
				icon = require('../../assets/img/fat-icon.png')
                kind = 'Lipides'
				acronym = 'g'
				break
			default:
				icon = ''
		}
		return {img: icon, text: kind, acr: acronym}
	}


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

