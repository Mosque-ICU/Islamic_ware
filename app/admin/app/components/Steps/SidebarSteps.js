import { CheckIcon } from '@heroicons/react/20/solid'

import { useAuth } from '@redwoodjs/auth'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SidebarSteps() {
  const { loading, isAuthenticated } = useAuth()

  let profileInformation = false
  let businessInformation = false
  let theme = false
  let preview = false

  function generateStatus(id) {
    if (id === 1) {
      if (isAuthenticated) {
        return 'complete'
      } else {
        return 'current'
      }
    }
    if (id === 2) {
      if (isAuthenticated) {
        if (profileInformation) {
          return 'complete'
        }
        return 'current'
      } else {
        return 'upcoming'
      }
    }
    if (id === 3) {
      if (isAuthenticated) {
        if (profileInformation) {
          if (businessInformation) {
            return 'complete'
          }
          return 'current'
        }
        return 'upcoming'
      } else {
        return 'upcoming'
      }
    }
    if (id === 4) {
      if (isAuthenticated) {
        if (profileInformation) {
          if (businessInformation) {
            if (theme) {
              return 'complete'
            }
            return 'current'
          }
          return 'upcoming'
        } else {
          return 'upcoming'
        }
      }
    }
    if (id === 5) {
      if (isAuthenticated) {
        if (profileInformation) {
          if (businessInformation) {
            if (theme) {
              if (preview) {
                return 'complete'
              }
              return 'current'
            }
            return 'upcoming'
          }
        } else {
          return 'upcoming'
        }
      }
    }
  }
  //   }
  const steps = [
    {
      name: 'Create account',
      description: 'Login or sign up to register.',
      href: '#',
      status: generateStatus(1),
    },
    {
      name: 'Profile information',
      description: 'Cursus semper viverra facilisis et et some more.',
      href: '#',
      status: generateStatus(2),
    },
    {
      name: 'Business information',
      description: 'Penatibus eu quis ante.',
      href: '#',
      status: generateStatus(3),
    },
    {
      name: 'Theme',
      description: 'Faucibus nec enim leo et.',
      href: '#',
      status: generateStatus(4),
    },
    {
      name: 'Preview',
      description: 'Iusto et officia maiores porro ad non quas.',
      href: '#',
      status: generateStatus(5),
    },
  ]
  return (
    <nav className="p-5" aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? 'pb-10' : '',
              'relative'
            )}
          >
            {step.status === 'current' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                      <CheckIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-white">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : step.status === 'complete' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <a
                  href={step.href}
                  className="group relative flex items-start"
                  aria-current="step"
                >
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-indigo-600">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
