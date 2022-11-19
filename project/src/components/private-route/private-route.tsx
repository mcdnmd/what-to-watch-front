import {AppRoute, AuthorizationStatus} from '../../const';
import {Navigate} from 'react-router-dom';

type Props = {
  authStatus: AuthorizationStatus;
  children: JSX.Element;
}


function PrivateRoute(props: Props): JSX.Element {
  const {authStatus, children} = props;

  if (authStatus === AuthorizationStatus.Auth) {
    return children;
  }
  return <Navigate to={AppRoute.SignIn}/>;
}

export default PrivateRoute;
