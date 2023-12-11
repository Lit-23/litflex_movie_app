import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from './firebaseConfig';

const authStateObserver = (setAuthenticated, setUserDisplayName) => {
  const auth = getAuth(firebaseApp);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthenticated(true);
      setUserDisplayName(user.displayName);
    } else {
      setAuthenticated(false);
    }
  });
};

export default authStateObserver;