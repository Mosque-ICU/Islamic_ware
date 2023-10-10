import Loader from '../Loader/Loader'

export const QUERY = gql`
  query PrayerTimesScreenQuery($id: Int!) {
    prayerTimesScreen(id: $id) {
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
      Prayer {
        id
        data
        name
        createdAt
        updatedAt
        deletedAt
      }
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => {
  if (error?.message === 'Unauthenticated') {
    navigate(routes.home())
    return null
  }
  return <div style={{ color: 'red' }}>Error: {error?.message}</div>
}

export const Success = ({ prayerScreentTimes }) => {
  return (
    <ul>
      {prayerScreentTimes.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
