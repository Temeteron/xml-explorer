import React, { useEffect, useState } from 'react';
import Dropzone from './components/Dropzone';

const HomeScreen = () => {
  const [fileString, setFile] = useState<string>('');
  return (
    <div className="padding-10">
      <div className="flex-center-start-column-nowrap">
        <div className="dropzone-container">
        <Dropzone setFile={setFile} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
