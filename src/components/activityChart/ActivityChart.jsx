import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/activityChart.scss'

export default function ActivityChart({user}) {
  if(user){
    const formatXAxis = (tick) => {
      tick = tick.slice(9)
      return tick
    }

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className='toolTipContainer'>
            <p>{`${payload[0].value}Kg`}</p>
            <p>{`${payload[1].value}Kcal`}</p>
          </div>
        )
      }
      return null
    }

    return (
      <div className="activityChart">
        <div className='activityChart__legend'>
          <p className='title'>Activité quotidienne</p>
          <div className='xy'>
            <p className='poids'>Poids (kg)</p>
            <p className='calories'>Calories brûlées (kcal)</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={user.sessions}
            barGap={8}
            margin={{
              top: 40,
              right: 30,
              left: 20,
              bottom: 55,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickFormatter={formatXAxis} tickLine={false} />
            <YAxis dx={30} yAxisId="kilogram" dataKey="kilogram" orientation='right' tick={{ fontSize: 14 }} tickLine={false} axisLine={false} tickCount="3" domain={['dataMin-4', 'dataMax+1']}/>
            <YAxis yAxisId="calories" hide={true} domain={[0, 'dataMax +100']} />
            <Tooltip separator='' content={<CustomTooltip />} />
            <Bar dataKey="kilogram" yAxisId="kilogram" fill="red" barSize={15} radius={[50, 50, 0, 0]}/>
            <Bar dataKey="calories" yAxisId="calories" fill="#282D30" barSize={15} radius={[50, 50, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

