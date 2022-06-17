import { useEffect, useState } from 'react';

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
        // TODO: handle error
        console.log('Error while reading blob');
      };
    }
  }, [filePath]);

  return setFilePath;
};
