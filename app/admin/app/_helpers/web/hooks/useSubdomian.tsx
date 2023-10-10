import React from 'react'

function useSubdomian() {
  const [subdomain, setSubdomain] = React.useState('')

  React.useEffect(() => {
    const subdomain = window.location.hostname.split('.')[0]
    setSubdomain(subdomain)
  }, [])

  return {
    subdomain,
  }
}

export default useSubdomian
