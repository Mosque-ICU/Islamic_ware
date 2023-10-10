import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ApplicationForm from 'src/components/Application/ApplicationForm'

const CREATE_APPLICATION_MUTATION = gql`
  mutation CreateApplicationMutation($input: CreateApplicationInput!) {
    createApplication(input: $input) {
      id
    }
  }
`

const NewApplication = () => {
  const [createApplication, { loading, error }] = useMutation(
    CREATE_APPLICATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Application created')
        navigate(routes.applications())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createApplication({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Application</h2>
      </header>
      <div className="rw-segment-main">
        <ApplicationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewApplication
