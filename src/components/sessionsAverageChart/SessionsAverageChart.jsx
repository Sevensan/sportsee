import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'
import '../../styles/sessionsChart.scss'



import getUser from '../../data/useData'

export default function SessionsAverageChart(props) {

    const [user, setUser] = useState(null)
    useEffect(() => {
        getUser(props.routeId, '/average-sessions').then(data => setUser(data.data))
    })


    const numberToDay = ({ day }) => {
		let value = ''
		switch (day) {
			case 1:
				value = 'L'
				break
			case 2:
				value = 'M'
				break
			case 3:
				value = 'M'
				break
			case 4:
				value = 'J'
				break
			case 5:
				value = 'V'
				break
			case 6:
				value = 'S'
				break
			case 7:
				value = 'D'
				break
			default:
				value = ''
		}
		return value
	}

    const sessionsMapped = []
    if (user) {
      user.sessions.map(session => {
        sessionsMapped.push({sessionLength: session.sessionLength, day: numberToDay(session)})
      })
    }

//     const ToolTipContainer = styled.div`
//     width: 54.6px;
//     height: 35px;
//     background-color: white;
//     font-size: 12px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `
    const CustomToolTip = ({payload, label, active}) => {
        if (payload.length && active) {
            return (
              <div className='tooltipContainer'>
                <p>{ `${payload[0].value} min` }</p>
              </div>
            )
        }
    }


  return (
    <div className="sessionsChart">
      {user &&
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={sessionsMapped}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="rgba(255, 255, 255, 0.5)" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip content={<CustomToolTip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" />
        </LineChart>
      </ResponsiveContainer>
      }

    </div>
  )
}

