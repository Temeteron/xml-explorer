import { useEffect, useState } from 'react';

/**
 * A custom react hook that returns a setter function 'setFilePath',
 * which is used the set the
 * @param onLoad
 */
export const useFileReader = (onLoad: (file: string) => void) => {
  const [filePath, setFilePath] = useState<Blob | null>(null);

  useEffect(() => {
    if (filePath) {
      const reader = new FileReader();

      reader.readAsText(filePath);

      reader.onload = () => {
        onLoad(reader.result as string);
      };

      reader.onerror = () => {
        console.error('Error while reading blob');
        // TODO: Show error in a Snackbar
      };
    }
  }, [filePath]);

  return setFilePath;
};
