import React, { useEffect, useState } from 'react';
import Dropzone from './components/Dropzone';
import fxp from 'fast-xml-parser';
import TreeExplorer from './components/TreeExplorer';

const parser = new fxp.XMLParser({ ignoreAttributes: false });

interface IXmlData {
  [key: string]: string;
}

const HomeScreen = () => {
  const [fileString, setFile] = useState<string>('');
  const [xmlData, setXmlData] = useState<IXmlData>({});

  useEffect(() => {
    if (fileString) {
      const data = parser.parse(fileString);
      setXmlData(data);
    }
  }, [fileString]);

  return (
    <div className="padding-10">
      <div className="flex-center-start-column-nowrap">
        <div className="dropzone-container">
          <Dropzone setFile={setFile} />
        </div>
        <div className="tree-container">
          <TreeExplorer xmlData={xmlData} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
