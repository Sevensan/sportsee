import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import '../../styles/perfRadarChart.scss'

export default function ScoreRadarChart({user}) {

  const numberToKind = ({ kind }) => {
		let value = ''
		switch (kind) {
			case 1:
				value = user.kind[1]
				break
			case 2:
				value = user.kind[2]
				break
			case 3:
				value = user.kind[3]
				break
			case 4:
				value = user.kind[4]
				break
			case 5:
				value = user.kind[5]
				break
			case 6:
				value = user.kind[6]
				break
			default:
				value = ''
		}
		return value
	}

  const perfMapped = []
  if (user) {
    user.data.forEach(perf => {
      perfMapped.push({kind: numberToKind(perf), value: perf.value})
    })

    return (
      <div className="perfChart">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="49%" cy="50%" outerRadius="65%" data={perfMapped}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" dy={2} tickLine={false} tick={{ fontSize: 11 }} stroke="white" />
            <Radar name="JP" dataKey="value" fill="red" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }

}

