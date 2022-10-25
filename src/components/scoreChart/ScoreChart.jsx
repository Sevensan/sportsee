import { useState, useEffect } from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../../styles/scoreChart.scss'


import getUser from '../../data/useData'

export default function PerformanceRadarChart(props) {

    const [user, setUser] = useState(null)
    useEffect(() => {
        getUser(props.routeId).then(data => setUser(data.data))
    })
    let data = []
    if(user){
      data = [{ value: (user.todayScore || user.score * 100), fill: "red" }]
    }

  return (
    <div className="scoreChart">
    {
      user &&
      <div className='scoreChart__container'>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius={70} outerRadius="80%" barSize={8} data={data}>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
        <div className='scoreChart__legend'>
          <p className='percent'>{`${data[0].value}%`}</p>
          <p className='text'>De votre objectif</p>
        </div>
      </div>
    }
    </div>
  )
}

