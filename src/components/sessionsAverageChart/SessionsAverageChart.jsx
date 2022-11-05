import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import '../../styles/sessionsChart.scss'
import PropTypes from "prop-types"
import {sessionsMapped} from './useSession'

/**
 * Component ActivityLineChart
 * @param {Object} user object containing user activity
 * @param {Object[]} data
 * @param {String} data[].day date as string
 * @param {Number} data[].sessionLength session duration as number
 * @returns {Component} bar chart to display
 */
export default function SessionsAverageChart({user}) {
  if(user){
    const data = sessionsMapped(user)

   /**
	 * Custom barchart tooltip
	 * @param {Boolean} active Tooltip status
	 * @param {Object[]} payload Contain barchart datas (user weight and user calories)
	 * @returns {Component} div with data to display
	 */
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
            data={data}
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

SessionsAverageChart.propTypes = {
	user: PropTypes.shape({
	  sessions: PropTypes.arrayOf(
		PropTypes.shape({
		  day: PropTypes.number.isRequired,
		  sessionLength: PropTypes.number.isRequired,
		})
	  )
	})
  }