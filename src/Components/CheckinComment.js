import React, { useState, useEffect } from "react";
import useAuth from "../services/firebase/useAuth";
import useCheckin from "../services/firebase/useCheckin";
import Tile from "./Tile";
import styled from "styled-components";
import avatarSmall from "../assets/avatar_small.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Histogram from "./Histogram";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
function LikeButton(props) {
  const StyledDiv = styled.div`
    border-radius: 11px;
    border: 1px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.purple};
  `;

  return (
    <StyledDiv>
      <h6>
        <FontAwesomeIcon style={{ fontSize: "12px" }} icon={faHeart} /> 12{" "}
      </h6>
    </StyledDiv>
  );
}
const StyledDetailsArea = styled.div`
  display: grid;
  grid-column-gap: 2%;
  grid-template-columns: 0.2fr 3fr;
  align-items: bottom;
  textarea {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.darkShade[25]};
    margin-top: 5px;
    margin-left: 2%;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.purple};
`;

const StyledPhotoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50%;
    margin: 2%;
    width: 60px;
    height: 60px;
  }
`;

const StyledSmallPhoto = styled.img`
  border-radius: 50%;
  margin: 2%;
  width: 45px;
  height: 45px;
  margin-left: 25%;
`;

const StyledCheckinArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 190px;
`;

const StyledScoreArea = styled.div`
display: flex;
flex-direction: row;
h3 {
  color: ${({ theme }) => theme.colors.purple};
},`;

const StyledDivider = styled.hr`
  border: 0.3px solid ${({ theme }) => theme.colors.darkShade[5]};
  width: 100%;
`;

const CommentArea = styled.div`
border-radius: 15px;
background-color: ${({ theme }) => theme.colors.grey};
width: 95%;
margin-top: 2%;
min-height: 80px;
padding 3%;
margin-left: 2%;
h6:nth-child(2) {
   margin-top: 5%
},
`;
function CheckinComment(props) {
  const { checkin, onComment } = props;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { getCheckinCommentsSnap } = useCheckin();
  const { user } = useAuth();
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.currentTarget.value) {
      e.preventDefault();
      onComment(checkin.id, comment);
      setComment("");
      e.currentTarget.blur();
    }
  };

  const commentListener = () => {
    getCheckinCommentsSnap(checkin.id, (commentsRef) => {
      let commentsHolder = [];
      if (commentsRef.metadata.hasPendingWrites) {
        return;
      }
      commentsRef.forEach((c) =>
        commentsHolder.push({ ...c.data(), ...{ id: c.id } })
      );
      setComments(commentsHolder);
      debugger;
    });
  };

  useEffect(() => {
    commentListener();
  }, []);
  return (
    <Tile>
      <StyledDetailsArea>
        <StyledPhotoArea>
          <img src={checkin.photo} alt="avatar" />
          <LikeButton></LikeButton>
        </StyledPhotoArea>

        <StyledCheckinArea>
          <h6>
            {checkin.userName} <StyledSpan> Checked In </StyledSpan>
          </h6>
          <em> {dayjs().to(checkin.time.toDate())} </em>{" "}
          <h6> {checkin.comment}</h6>
          <h6> Total</h6>
          <StyledScoreArea>
            <h3>{checkin.score}</h3>
            <div style={{ width: "100%", height: "90%" }}>
              <Histogram barCount={7} bars={[10, 10, 10, 10, 10, 10, 10]} />
            </div>
          </StyledScoreArea>
        </StyledCheckinArea>
      </StyledDetailsArea>
      <StyledDivider />
      {comments.map((c) => (
        <StyledDetailsArea key={c.id}>
          <StyledSmallPhoto
            src={c.photo}
            style={{ marginBottom: "-20px" }}
            alt="avatar"
          />

          <CommentArea>
            <h6>
              {c.name} <em> {dayjs().to(c.time.toDate())} </em>
            </h6>

            <h6> "{c.comment}" </h6>
          </CommentArea>
        </StyledDetailsArea>
      ))}

      <StyledDetailsArea>
        <StyledSmallPhoto
          src={user.photoURL}
          style={{ marginBottom: "-20px" }}
          alt="avatar"
        />

        <textarea
          rows="4"
          onChange={(e) => setComment(e.target.value)}
          onKeyPress={handleKeyPress}
          value={comment}
        ></textarea>
      </StyledDetailsArea>
    </Tile>
  );
}

CheckinComment.propTypes = {};

export default CheckinComment;
