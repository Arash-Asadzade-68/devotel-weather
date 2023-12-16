import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HOME_PAGE_URL, SIGN_IN_PAGE_URL } from '../../Routes/URLS.const';
import { RootState } from '../../redux/store';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from '../../redux/user/userSlice';
import { useSnackbarMessages } from '../../hooks/useSnackbarContext';

export function NavigationBar() {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const { sendSnackbarMessage } = useSnackbarMessages();

    async function handleSignOut() {
        const res = await fetch('/api/user/sign-out', {
            method: 'GET',
        });
        const data = await res.json();
        if (!data.success) {
            sendSnackbarMessage('something went wrong with your signout', 'error');
        } else {
            dispatch(signOut());
        }
    }
    return (
        <ul className="flex gap-2 ">
            {user.id ? (
                <>
                    <img src={user.avatar} alt="profile_avatar" className="rounded-full h-7 w-7 object-cover" />
                    <button className="text-slate-700" title="SignOut" onClick={handleSignOut}>
                        <FaSignOutAlt />
                    </button>
                </>
            ) : (
                <>
                    <Link to={HOME_PAGE_URL}>
                        <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
                    </Link>
                    <Link to={`../auth/${SIGN_IN_PAGE_URL}`}>
                        <li className="text-slate-700 hover:underline text-sm sm:text-base">Sign In</li>
                    </Link>
                </>
            )}
        </ul>
    );
}
