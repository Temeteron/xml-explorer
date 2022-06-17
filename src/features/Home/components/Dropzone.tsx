import React, { useCallback } from 'react';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import { useFileReader } from '../../../hooks';

interface Props {
  setFile: (file: string) => void;
}

type T = File;

const Dropzone = ({ setFile }: Props) => {
  const setFilePath = useFileReader(setFile);

  const onDrop = useCallback((acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => {
    if (acceptedFiles[0]) setFilePath(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'text/xml': ['.xml'] },
    multiple: false,
    onDrop,
  });

  return (
    <div {...getRootProps({ className: 'dropzone' })} className="dropzone">
      <input {...getInputProps()} />
      <div className="font18">Drop or click to upload</div>
    </div>
  );
};

export default Dropzone;
