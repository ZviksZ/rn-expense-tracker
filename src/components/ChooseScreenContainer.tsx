import React                           from 'react';
import {useSelector}                   from "react-redux";
import {selectGlobal}                  from "../store/ducks/global/selectors";
import {AppNavigation, AuthNavigation} from "../navigation/AppNavigation";

export const ChooseScreenContainer = () => {
   const {user} = useSelector(selectGlobal)
   return (
      <>
         {
            user ? <AppNavigation/> : <AuthNavigation/>
         }
      </>
   );
}
