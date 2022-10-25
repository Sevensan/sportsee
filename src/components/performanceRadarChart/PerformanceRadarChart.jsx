import { useState, useEffect } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import '../../styles/perfRadarChart.scss'


import getUser from '../../data/useData'

export default function ScoreRadarChart(props) {

    const [user, setUser] = useState(null)
    useEffect(() => {
        getUser(props.routeId, '/performance').then(data => setUser(data.data))
    })


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
      }

  return (
    <div className="perfChart">
    {
      user &&
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={perfMapped}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar name="JP" dataKey="value" fill="red" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    }
    </div>
  )
}

