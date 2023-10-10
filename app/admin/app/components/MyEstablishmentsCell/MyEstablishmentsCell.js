import CustomHome from 'src/customPages/Home/CustomHome'
import Loader from 'src/components/Loader/Loader'
import MyApplicationsCell from '../MyApplicationsCell/MyApplicationsCell'

export const QUERY = gql`
  query orgUsers {
    myOrgUser {
      id
      userId
      establishmentName
      User {
        firstName
        lastName
        id
        email
      }
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <MyApplicationsCell />

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ myEstablishments, myOrgUser }) => {
  console.log(myEstablishments)
  console.log(myOrgUser[0])
  return <CustomHome orgUsers={myOrgUser} establishment={myEstablishments} />
}
