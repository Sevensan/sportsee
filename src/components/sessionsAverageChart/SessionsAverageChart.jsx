import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import '../../styles/sessionsChart.scss'


export default function SessionsAverageChart({user}) {

  if(user){
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
    user.sessions.map(session => {
      sessionsMapped.push({sessionLength: session.sessionLength, day: numberToDay(session)})
    })

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
            <defs>
              <linearGradient id="lineColor" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,.1)" />
                <stop offset="33%" stopColor="rgba(255,255,255,.4)" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="rgba(255, 255, 255, 0.5)" axisLine={false} tickLine={false} padding={{ left: -10, right: -15 }}/>
            <YAxis hide domain={['dataMin -15', 'dataMax +50']} />
            <Tooltip content={<CustomToolTip />} />
            <Line type="natural" dataKey="sessionLength" stroke="url(#lineColor)" strokeWidth={2}/>

          </LineChart>
        </ResponsiveContainer>
        <div className='title'>
          <p>Durée moyenne des sessions</p>
        </div>
      </div>
    )
  }
}

