import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../../styles/scoreChart.scss'
import PropTypes from "prop-types"

/**
 * Component who build main title
 * @param {Object} user fetched user infos
 * @param {Number} user.todayScore user's score /1, ex : 0.12/1
 * @returns {Component} radar chart to display
 */

export default function ScoreChart({user}) {
  let data = []
  if(user){
    data = [{ value: (user.todayScore * 100 || user.score * 100), fill: "red" }]

    return (
      <div className="scoreChart">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius={70} outerRadius="80%" barSize={15} data={data}>
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" cornerRadius={15} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className='scoreChart__legend'>
          <p className='percent'>{`${data[0].value}%`}</p>
          <p className='text'>De votre objectif</p>
        </div>
        <div className='scoreChart__title'>
          <p className='percent'>Score</p>
        </div>
      </div>
    )
  }
}

ScoreChart.propTypes = {
	user: PropTypes.shape({
    score: PropTypes.number,
    todayScore: PropTypes.number
	})
  }