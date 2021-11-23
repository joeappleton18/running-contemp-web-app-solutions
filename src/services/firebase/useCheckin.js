import {
  doc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

function useCheckin() {
  const db = getFirestore();
  const ref = collection(db, "checkins");
  const createCheckin = (checkin) => addDoc(ref, checkin);
  const getCheckins = () => getDocs(ref);

  const createCheckinComment = (checkinID, comment) => {
    const ref = collection(db, "checkins", checkinID, "comments");
    return addDoc(ref, comment);
  };

  const getCheckinComments = (checkinID) => {
    const ref = collection(db, "checkins", checkinID, "comments");
    return getDocs(ref);
  };

  const getCheckinCommentsSnap = (checkinID, callback) => {
    const ref = collection(db, "checkins", checkinID, "comments");
    const q = query(ref, orderBy("time"));
    return onSnapshot(q, callback);
  };

  return {
    createCheckin,
    getCheckins,
    createCheckinComment,
    getCheckinComments,
    getCheckinCommentsSnap,
  };
}
export default useCheckin;
