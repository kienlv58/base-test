import { useSelector } from 'react-redux';

const useSession = () =>
  useSelector(({ session: { token, info } }) => ({
    token: token || null,
    info,
  }));

export default useSession;
