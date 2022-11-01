import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import SessionsAverageChart from "../components/sessionsAverageChart/SessionsAverageChart"
import "../styles/dashboard.scss"
import PerformanceRadarChart from '../components/performanceRadarChart/PerformanceRadarChart'
import ActivityChart from '../components/activityChart/ActivityChart'
import ScoreChart from '../components/scoreChart/ScoreChart'
import StatCard from '../components/statCard/StatCard'
import getUser from '../data/useData.js'

export default function Dashboard() {
    const routeId = useParams().id
    const [user, setUser] = useState(null)
    useEffect(() => {
      getUser(routeId).then(data => setUser(data.data))
    })
  return (
    <div className="dashboard">
      <h1>Bonjour <span className='title-red'>{user?.userInfos?.firstName}</span></h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      <div className='dashboard__container'>
        <div className='dashboard__charts'>
          <ActivityChart routeId={routeId} />
          <div className='charts_list'>
            <SessionsAverageChart routeId={routeId} />
            <PerformanceRadarChart routeId={routeId} />
            <ScoreChart routeId={routeId} />
          </div>
        </div>
        <div className='dashboard__sideStats'>
          {
            user &&
            Object.entries(user.keyData).map( (stat, index) => <StatCard keyData={stat} key={index} />)
          }
        </div>
      </div>
    </div>
  )
}
