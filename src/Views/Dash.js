import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DaysCompleted from "../Components/DaysCompleted";
import CheckinComment from "../Components/CheckinComment";
import useAuth from "../services/firebase/useAuth";
import useCheckin from "../services/firebase/useCheckin";
import { serverTimestamp } from "firebase/firestore";

function Dash(props) {
  const { user } = useAuth();
  const [checkins, setCheckins] = useState([]);
  const { createCheckinComment, getCheckins } = useCheckin();

  const getCheckinData = async () => {
    const checkinsSnap = await getCheckins();
    let checkins = [];
    if (checkinsSnap.size) {
      checkinsSnap.forEach((doc) => {
        checkins.push({ ...doc.data(), ...{ id: doc.id } });
      });
      setCheckins(checkins.reverse());
    }
  };

  useEffect(() => {
    getCheckinData();
  }, []);

  const handleComment = async (id, comment) => {
    try {
      await createCheckinComment(id, {
        ...{ comment },
        ...{
          name: user.displayName || user.email,
          time: serverTimestamp(),
          photo: user.photoURL,
        },
      });
    } catch (e) {
      console.log(e);
      console.log("could not add a comment");
    }
  };

  return (
    <div>
      <DaysCompleted days={15} checkins={checkins}>
      </DaysCompleted>
      {checkins.map((c) => (
        <CheckinComment key={c.id} onComment={handleComment} checkin={c} />
      ))}
    </div>
  );
}

Dash.propTypes = {
  checkins: PropTypes.array.isRequired,
};

export default Dash;
