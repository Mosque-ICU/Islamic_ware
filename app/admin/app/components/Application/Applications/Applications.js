import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Application/ApplicationsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_APPLICATION_MUTATION = gql`
  mutation DeleteApplicationMutation($id: String!) {
    deleteApplication(id: $id) {
      id
    }
  }
`

const ApplicationsList = ({ applications }) => {
  const [deleteApplication] = useMutation(DELETE_APPLICATION_MUTATION, {
    onCompleted: () => {
      toast.success('Application deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete application ' + id + '?')) {
      deleteApplication({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{truncate(application.id)}</td>
              <td>{truncate(application.type)}</td>
              <td>{truncate(application.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.application({ id: application.id })}
                    title={'Show application ' + application.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editApplication({ id: application.id })}
                    title={'Edit application ' + application.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete application ' + application.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(application.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApplicationsList
