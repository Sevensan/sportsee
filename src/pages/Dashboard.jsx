import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import "../styles/dashboard.scss"

import getUser from '../data/useData.js'

export default function Dashboard() {
    const routeId = useParams().id
    const [user, setUser] = useState(null)
    useEffect(() => {
      getUser(routeId).then(data => {
        setUser(data.data)
      })
    })
  return (
    <div className="dashboard">
      <h1>Bonjour <span className='title-red'>{user?.userInfos?.firstName}</span></h1>
    </div>
  )
}
