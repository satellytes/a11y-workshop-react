import React, { ReactNode } from 'react';

interface CommentSectionProps {
  children: ReactNode;
}

const CommentSection: React.FC<CommentSectionProps> = ({ children }) => {
  return (
    <div className="comments-section">
      <h2>Comments</h2>
      {children}
    </div>
  );
};

export default CommentSection;
