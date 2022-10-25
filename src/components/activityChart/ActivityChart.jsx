import { useState, useEffect } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../styles/activityChart.scss'


import getUser from '../../data/useData'

export default function ActivityChart(props) {

    const [user, setUser] = useState(null)
    useEffect(() => {
        getUser(props.routeId, '/activity').then(data => setUser(data.data))
    })

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ]
  return (
    <div className="activityChart">
    {
    user &&
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={user.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="kilogram" fill="red" />
          <Bar dataKey="calories" fill="#282D30" />
        </BarChart>
      </ResponsiveContainer>
    }
    </div>
  )
}

