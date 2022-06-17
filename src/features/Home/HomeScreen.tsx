import React, { useEffect, useState } from 'react';
import Dropzone from './components/Dropzone';

const HomeScreen = () => {
  const [fileString, setFile] = useState<string>('');
  return (
    <div className="padding-10">
      <div className="flex-center-start-column-nowrap">
        <Dropzone setFile={setFile} />
      </div>
    </div>
  );
};

export default HomeScreen;
