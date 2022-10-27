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
      data = [{ value: (user.todayScore * 100 || user.score * 100), fill: "red" }]
    }
  return (
    <div className="scoreChart">
    {
      user &&
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius={70} outerRadius="80%" barSize={15} data={data}>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" cornerRadius={15} />
        </RadialBarChart>
      </ResponsiveContainer>
    }
    {
      user &&
      <div className='scoreChart__legend'>
        <p className='percent'>{`${data[0].value}%`}</p>
        <p className='text'>De votre objectif</p>
      </div>
    }
    </div>
  )
}

