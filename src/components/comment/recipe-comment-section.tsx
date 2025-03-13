import React, { ReactNode } from 'react';

interface CommentSectionProps {
  children: ReactNode;
}

const CommentSection: React.FC<CommentSectionProps> = ({ children }) => {
  return (
    <div>
      <h2>Comments</h2>
      {children}
    </div>
  );
};

export default CommentSection;
