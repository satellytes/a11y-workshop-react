import React from 'react';
import styled from 'styled-components';

interface RecipeCommentProps {
  username: string;
  date: string;
  comment: string;
  gifUrl?: string;
  likes: number;
}

const CommentContainer = styled.div`
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-default);
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CommentBody = styled.div`
  margin-bottom: 10px;
`;

const GifContent = styled.div`
  max-width: 350px;
`;

const LikeSpan = styled.span`
  color: var(--green);
`;

const RecipeComment: React.FC<RecipeCommentProps> = ({
  username,
  date,
  comment,
  gifUrl,
  likes,
}) => {
  return (
    <CommentContainer>
      <CommentHeader>
        <strong>{username}</strong>
        <span>{date}</span>
      </CommentHeader>
      <CommentBody>
        <p>{comment}</p>
        {gifUrl && (
          <GifContent>
            <iframe
              src={gifUrl}
              width="333"
              height="250"
              style={{}}
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
              title="Embedded GIF from Giphy"
            />
          </GifContent>
        )}
      </CommentBody>
      <div>
        <LikeSpan>Likes: {likes}</LikeSpan>
      </div>
    </CommentContainer>
  );
};

export default RecipeComment;
