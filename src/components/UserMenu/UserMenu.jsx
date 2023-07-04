import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, UserName, Button, Box } from './UserMenu.styled';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import userIcon from '../../images/user.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUser);

  return (
    <Wrapper>
      <Box>
        <img src={userIcon} alt="user" width={40} />
        <UserName>{name}</UserName>
      </Box>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
