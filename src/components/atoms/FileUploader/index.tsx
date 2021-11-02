import React, { useRef, useState } from 'react';

// components
import { EFileUploaderType, IPropsType } from './types';

// styles
import {
  FileUploaderWrapper,
  FileUploaderInput,
  FileUploaderButton,
  FileUploaderIcon,
  FileUploaderText,
  FileUploaderResetButton,
  FileUploaderResetIcon,
} from './styles';

// data
import defaultProps from './defaultProps';

export const FileUploader = (props: IPropsType) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const [isFileLoad, setIsFileLoad] = useState<boolean>(false);

  const fileInputHandler = e => {
    setIsFileLoad(true);
    props.onFileSelect(e.target.files[0]);
  };

  // form cancel handler
  const fileResetHandler = () => {
    setIsFileLoad(false);
    props.onFileSelect(null);
  };

  return (
    <FileUploaderWrapper>
      <FileUploaderInput
        type="file"
        ref={fileInput}
        onChange={fileInputHandler}
      />
      <FileUploaderButton
        type="button"
        disabled={props.disabled}
        onClick={e => fileInput.current && fileInput.current.click()}
      >
        <FileUploaderIcon />
        {props.type === EFileUploaderType.Extended && (
          <FileUploaderText>
            {props.file ? props.file.name : props.text}
          </FileUploaderText>
        )}
      </FileUploaderButton>
      {props.type === EFileUploaderType.Extended && isFileLoad && (
        <FileUploaderResetButton onClick={fileResetHandler}>
          <FileUploaderResetIcon />
        </FileUploaderResetButton>
      )}
    </FileUploaderWrapper>
  );
};

FileUploader.defaultProps = defaultProps;
export default FileUploader;
