import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useSnackbarMessages } from '../../hooks/useSnackbarContext';
import { app } from '../../firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../redux/user/userSlice';
import { HOME_PAGE_URL } from '../../Routes/URLS.const';
import { errorHandler } from '../../utils/errorHandler';

export function OAuth() {
    const { sendSnackbarMessage } = useSnackbarMessages();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function onClickHandler() {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            const response = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    avatar: result.user.photoURL,
                }),
            });
            const data = await response.json();

            if (!data.success) {
                sendSnackbarMessage(data.message, 'error');
            } else {
                dispatch(signInSuccess(data));
                navigate(HOME_PAGE_URL);
            }
        } catch (error) {
            errorHandler(error, sendSnackbarMessage);
        }
    }
    return (
        <button
            onClick={onClickHandler}
            type="button"
            className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
            Continue With Google
        </button>
    );
}
