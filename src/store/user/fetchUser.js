import { app } from "../../../firebaseConfig";
import {
  errorGetUser,
  getUser,
  loadingUser,
  notAuthUserGoogle,
  notAuthUserLogin,
} from "./userSlice";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import auth from "@react-native-firebase/auth";

export const fetchUserById = (props) => async (dispatch) => {
  const { googleUserId } = props || {};
  const user = auth().currentUser;
  if (!user) {
    dispatch(notAuthUserLogin(true));
    console.log("Пользователь не найден.");
    return;
  }
  const firestore = getFirestore(app);
  const userId = user.uid || googleUserId;

  dispatch(loadingUser());

  try {
    const userDocRef = doc(firestore, "users", userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const user = docSnap.data();

      dispatch(getUser(user));
    } else {
      if (googleUserId) {
        dispatch(notAuthUserGoogle(true));
      } else {
        dispatch(notAuthUserLogin(true));
      }

      console.log("No such document!");
    }
  } catch (error) {
    dispatch(errorGetUser(error));
    console.error("Error getting document:", error);
  }
};
