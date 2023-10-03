import ApplicationReviewing from 'src/customPages/Applications/ApplicationReviewing'
import CreateApplication from 'src/customPages/Applications/CreateApplication'
import CreateApplicationThird from 'src/customPages/Applications/CreateApplicationThird'
import Loader from 'src/components/Loader/Loader'

export const QUERY = gql`
  query data {
    myApplications {
      id
      email
      type
      institutionName
      firstLine
      secondLine
      buildingNumber
      city
      county
      country
      zip
      telephone
      userId
    }
  }
`

export const Loading = () => <Loader />

export const Empty = () => <CreateApplication />

export const Failure = ({ error }) => (
  console.log(error),
  (<div style={{ color: 'red' }}>Error: {error?.message}</div>)
)

export const Success = (data) => {
  const [pageType, setPageType] = React.useState(true)
  const applicationData = data?.applications || data?.myApplications

  if (pageType == 'Summary' && applicationData && applicationData.length > 0) {
    return (
      <CreateApplicationThird
        institutionName={applicationData[0].institutionName}
        telephone={applicationData[0].telephone}
        email={applicationData[0].email}
        type={applicationData[0].type}
        city={applicationData[0].city}
        country={applicationData[0].country}
        secondLine={applicationData[0].secondLine}
        zip={applicationData[0].zip}
        county={applicationData[0].county}
        buildingNumber={applicationData[0].buildingNumber}
        firstLine={applicationData[0].firstLine}
        pageType={pageType}
        setPageType={setPageType}
      />
    )
  } else {
    return (
      <ApplicationReviewing
        applicationData={applicationData[0]}
        pageType={pageType}
        setPageType={setPageType}
      />
    )
  }
}
