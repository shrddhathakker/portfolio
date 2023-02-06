import React from 'react';
import './hobbies.css';

type Props = {};

const DocumentationPage = (props: Props) => {
  return (
    <div className='hobbies-layout'>
      <h1>
        <span>Hobbies</span>
        <div className="message">
          <div className="word1">cook</div>
          <div className="word2">yoga</div>
          <div className="word3">music</div>
          <div className="word3">dance</div>
        </div>
      </h1>
    </div>
  );
};

export default DocumentationPage;