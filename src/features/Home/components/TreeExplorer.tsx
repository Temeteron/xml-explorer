import React from 'react';
import { JSONTree } from 'react-json-tree';
import { IXmlData } from '../../../interfaces/shared.interface';

interface Props {
  xmlData: IXmlData;
}

/**
 * A simple tree explorer that has as input an XML as JSON
 * @param xmlData
 * @constructor
 */
const TreeExplorer = ({ xmlData }: Props) => {
  return (
    <div className="tree-explorer">
      <JSONTree data={xmlData} />
    </div>
  );
};

export default TreeExplorer;
