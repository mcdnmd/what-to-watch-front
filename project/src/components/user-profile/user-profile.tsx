import { useAppDispatch, useAppSelector } from '../../hooks/store-handler';
import { logoutAction } from '../../store/api-action';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';


type Props = {
  avatarLink: string;
}

function AuthedUserProfileBlock(props: Props): JSX.Element {
  const {avatarLink} = props;
  const dispatch = useAppDispatch();

  const handleSignOutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={avatarLink} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={handleSignOutClick}>Sign out</a>
      </li>
    </>
  );
}

function UserProfileBlock(): JSX.Element {
  const { authorizationStatus, user } = useAppSelector((state) => state);
  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth
        ? <AuthedUserProfileBlock avatarLink={user ? user.avatarUrl : 'img/avatar.jpg'} />
        : <Link to='/login' className='user-block__link'>Sign in</Link>}
    </ul>
  );
}

export default UserProfileBlock;
