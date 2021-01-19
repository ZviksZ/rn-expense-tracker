import React, {useEffect}              from 'react';
import {useDispatch, useSelector}      from "react-redux";
import {selectGlobal}                  from "../store/ducks/global/selectors";
import {AppNavigation, AuthNavigation} from "../navigation/AppNavigation";
import {getStorageUserRequest}         from "../store/ducks/global/thunks";

export const RouterContainer = () => {
   const {user} = useSelector(selectGlobal)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getStorageUserRequest())
   }, [])

   return (
      <>
         {
            user ? <AppNavigation/> : <AuthNavigation/>
         }
      </>
   );
}
