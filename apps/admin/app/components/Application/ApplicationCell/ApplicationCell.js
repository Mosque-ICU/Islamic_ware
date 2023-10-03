import Loader from 'src/components/Loader/Loader'
import Application from 'src/components/Application/Application'

export const QUERY = gql`
  query FindApplicationById($id: String!) {
    application: application(id: $id) {
      id
      type
      userId
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <div>Application not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ application }) => {
  return <Application application={application} />
}
