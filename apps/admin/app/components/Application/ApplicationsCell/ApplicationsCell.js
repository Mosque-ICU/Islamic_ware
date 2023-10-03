import { Link, routes } from '@redwoodjs/router'

import Applications from 'src/components/Application/Applications'

export const QUERY = gql`
  query FindApplications {
    applications {
      id
      type
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No applications yet. '}
      <Link to={routes.newApplication()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ applications }) => {
  return <Applications applications={applications} />
}
