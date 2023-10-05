import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_APPLICATION_MUTATION = gql`
  mutation DeleteApplicationMutation($id: String!) {
    deleteApplication(id: $id) {
      id
    }
  }
`

const Application = ({ application }) => {
  const [deleteApplication] = useMutation(DELETE_APPLICATION_MUTATION, {
    onCompleted: () => {
      toast.success('Application deleted')
      navigate(routes.applications())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete application ' + id + '?')) {
      deleteApplication({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Application {application.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{application.id}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{application.type}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{application.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editApplication({ id: application.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(application.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Application
