import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'

import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../api";

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <Container>
      <Navbar style={{position: "fixed", top: "0", width: "100%", background: "black", opacity: "0.5", zIndex: "1000"}}   >

<Navbar.Toggle style={{marginLeft: '20px'}} />
<Navbar.Collapse>
<Nav >
    <Nav.Link  style={{marginRight: '12px', color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 5px"}} href="">Home</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 5px"}} href="">Services</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 5px"}} href="">About</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 5px"}} href="">Login</Nav.Link>
    <Nav.Link style={{marginRight: '12px', color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 5px"}} href="">Content</Nav.Link>
</Nav>
</Navbar.Collapse >

<img src='/images/logo_1.png' style={{width: "6%", margin: "0 10px"}}/>

</Navbar>
      <Content>
    <div className="comments">
      <h3 className="comments-title">Post your thoughts here!</h3>

      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
    </Content>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #eae9e9;
    display: flex;
    justify-content: center;
    z-index: -1;


`
const Content = styled.div`
z-index: 1;
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #3bb19b;
z-index: 1;

box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
padding: 100px;
margin:50px;
border-radius: 15px;

`
export default Comments;
