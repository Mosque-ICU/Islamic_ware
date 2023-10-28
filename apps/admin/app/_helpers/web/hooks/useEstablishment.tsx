// import { useMutation } from '@redwoodjs/web'
import React from "react";
// import { routes, navigate } from '@redwoodjs/router'

import { addToCache, getCachData } from "../requestHandler";

import { useRouter } from "next/navigation";

export function useEstablishment(orgUsers = null) {
  const router = useRouter();
  // const { currentUser } = useAuth()

  // // React.useEffect(() => {
  // //   if (!currentUser) return
  // //   addToCache('currentUser', currentUser)
  // // }, [])

  const [currentEstablishment, setCurrentEstablishment] = React.useState(null);
  const [publicId, setPublicId] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);
  const [noEstablishment, setNoEstablishment] = React.useState(false);
  const [error, setError] = React.useState(null);

  // const [establishemntLogin] = useMutation(ESTABLISHMNET_LOGIN, {
  //   onCompleted: (data) => {
  //     console.log('data', data)
  //     setCurrentEstablishment(data.establishmentLogin)
  //     //remove all spaces from publicId
  //     const publicId = data.establishmentLogin.name.replace(/\s/g, '')
  //     addToCache(publicId, data.establishmentLogin, true) //add to cache
  //     const userCache = { ...orgUsers[0] }
  //     delete userCache.id
  //     addToCache('currentUser', userCache, true) //add to cache
  //     setLoading(false)
  //     //set etablishment publicId as route param
  //   },
  //   onError: (error) => {
  //     console.log('error', error)
  //     setLoading(false)
  //     setError(error)
  //   },
  // })

  React.useEffect(() => {
    checkAuthirization();
  }, [orgUsers]);

  const checkAuthirization = async () => {
    //check current user
    const currentUser = await getCachData("currentUser", true);
    if (!currentUser) return router.push("/login");

    if (orgUsers) {
      hadleEstablishmentLogin(orgUsers);
    } else {
      hadleEstablishmentLogin();
    }
  };

  const hadleEstablishmentLogin = async (orgUsers = null) => {
    //check if there is a  param in the route
    setLoading(true);
    const routeSplit = window.location.pathname.split("/");
    const publicId = routeSplit[routeSplit.length - 1];
    console.log("publicId", publicId);

    setPublicId(publicId);

    //check if publicId is in the cache
    const cachedEstablishment = await getCachData(publicId, true);
    console.log("cachedEstablishment", cachedEstablishment);
    if (cachedEstablishment) {
      setCurrentEstablishment(cachedEstablishment);
      return setLoading(false);
    } else {
      return router.push("/login");
    }

    //if not logged in to an establishment, check if there is only 1 etablishment and login if there is
    if (orgUsers && orgUsers.length === 1) {
      // return establishemntLogin({
      //   variables: {
      //     id: orgUsers[0].id,
      //   },
      // });
    } else {
      router.push("/dashboard/home/" + publicId);
    }
  };

  return {
    currentEstablishment,
    loading: isLoading,
    error,
    noEstablishment,
    publicEstablishmentId: publicId,
  };
}
