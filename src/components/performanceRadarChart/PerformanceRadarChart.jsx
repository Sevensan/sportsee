import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import '../../styles/perfRadarChart.scss'
import PropTypes from "prop-types"
import { perfMapped } from './usePerformance'

export default function PerformanceRadarChart({user}) {

  if (user) {

	const data = perfMapped(user)

    return (
      <div className="perfChart">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="49%" cy="50%" outerRadius="65%" data={data}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" dy={2} tickLine={false} tick={{ fontSize: 11 }} stroke="white" />
            <Radar name="JP" dataKey="value" fill="red" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }

}

PerformanceRadarChart.propTypes = {
	user: PropTypes.shape({
	  data: PropTypes.arrayOf(
		PropTypes.shape({
		  kind: PropTypes.number.isRequired,
		  value: PropTypes.number.isRequired,
		})
	  ),
	  kind: PropTypes.shape({
		1: PropTypes.string,
		2: PropTypes.string,
		3: PropTypes.string,
		4: PropTypes.string,
		5: PropTypes.string,
		6: PropTypes.string
	  })
	})
  }