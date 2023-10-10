import Loader from '../Loader/Loader'
import PrayerScreens from '../PrayerScreens/PrayerScreens'
import { navigate, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query PrayerScreensQuery {
    prayerTimesScreens {
      id
      title
      description
      topMessage
      bottomMessage
      images
      userId
      createdAt
      updatedAt
      deletedAt
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => (
  <div className="page-wrapper">
    {' '}
    <PrayerScreens />
  </div>
)

export const Failure = ({ error }) => {
  if (error?.message === 'Unauthenticated') {
    navigate(routes.home())
    return null
  }
  return <div style={{ color: 'red' }}>Error: {error?.message}</div>
}

export const Success = ({ prayerTimesScreens }) => {
  const screens = JSON.parse(JSON.stringify(prayerTimesScreens))
  return (
    <div className="page-wrapper">
      <PrayerScreens screens={screens} />
    </div>
  )
}
