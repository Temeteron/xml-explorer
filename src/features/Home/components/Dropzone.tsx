import React, { useCallback } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { useFileReader } from '../../../hooks';

interface Props {
  setFile: (file: string) => void;
}

type T = File;

/**
 * A dropzone component that you can drop or open a file and on success
 * it will return the xml as a string through the setter that is passed
 * as an argument to the component.
 * @param setFile
 * @constructor
 */
const Dropzone = ({ setFile }: Props) => {
  const setFilePath = useFileReader(setFile);

  // OnDrop/Open action of dropzone
  const onDrop = useCallback((acceptedFiles: T[], fileRejections: FileRejection[]) => {
    if (acceptedFiles[0]) {
      // File accepted
      setFilePath(acceptedFiles[0]);
      return;
    }

    // Probably unnecessary if you want to be a silent error
    if (fileRejections.length) {
      // File rejected
      const rejectionReason = fileRejections[0]?.errors[0]?.message || 'Unknown reason';
      console.info('File rejected due to: ', rejectionReason);
      // TODO: Show rejection reason in a Snackbar
    }
  }, []);

  // Initiate, config dropzone
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
