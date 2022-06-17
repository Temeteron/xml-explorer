import React from 'react';
import { JSONTree } from 'react-json-tree';

interface Props {
  xmlData: any;
}

const TreeExplorer = ({ xmlData }: Props) => {
  return (
    <div className="tree-explorer">
      <JSONTree data={xmlData} />
    </div>
  );
};

export default TreeExplorer;
