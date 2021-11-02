import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// store
import { useUtilsSlice } from 'store/modules/utils/hook';
import {
  selectFileData,
  selectFileUploadLoading,
  selectFileUploadDone,
  selectFileUploadError,
} from 'store/modules/utils/selectors';

// components
import { IPropsType } from './types';

// styles
import {
  Wrapper,
  File,
  Input,
  Button,
  Icon,
  Text,
  Image,
  ResetButton,
  ResetIcon,
  Tips,
} from './styles';

// data
import defaultProps from './defaultProps';
import { ColorType, TypesType } from '../LoadingIndicator/types';
import LoadingIndicator from '../LoadingIndicator';

export const ImageUploader = (props: IPropsType) => {
  // slice hook
  const { actions } = useUtilsSlice();

  const fileInput = useRef<HTMLInputElement>(null);

  // selectors
  const fileData = useSelector(selectFileData);
  const uploadLoading = useSelector(selectFileUploadLoading);
  const uploadDone = useSelector(selectFileUploadDone);

  // dispatch & actions
  const dispatch = useDispatch();
  const uploadFile = payload => dispatch(actions.uploadFileTrigger(payload));

  // watch uploadDone - handle onChange
  useEffect(() => {
    if (uploadDone && fileData && fileData.length > 0) {
      props.changed({ action: 'input-change', value: fileData });
      console.log(fileData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadDone]);

  const fileInputHandler = e => {
    if (e.target?.files[0]) {
      const formData: FormData = new FormData();

      formData.append(props.name, e.target.files[0]);

      uploadFile(formData);
    }
  };

  // form cancel handler
  const fileResetHandler = () => {
    if (fileInput.current) {
      fileInput.current.value = '';
    }

    props.changed({ action: 'input-change', value: '' });
  };

  return (
    <Wrapper>
      <File>
        <Input
          type="file"
          ref={fileInput}
          accept="image/png, image/gif, image/jpeg"
          onChange={fileInputHandler}
        />

        <Button
          type="button"
          disabled={uploadLoading}
          onClick={e => fileInput.current && fileInput.current.click()}
        >
          {props.src && props.src.length > 0 && (
            <Image src={props.src} alt="avatar" />
          )}

          {!(props.src && props.src.length > 0) && (
            <>
              <Icon />
              <Text>
                {props.src && props.src.length > 0 ? props.src : props.text}
              </Text>
            </>
          )}
        </Button>

        {props.src && props.src.length > 0 && (
          <ResetButton onClick={fileResetHandler}>
            <ResetIcon />
          </ResetButton>
        )}

        {uploadLoading && (
          <LoadingIndicator
            type={TypesType.Local}
            color={ColorType.Dark}
            size={5}
          />
        )}
      </File>

      <Tips>
        {props.description?.map(item => (
          <span>{item}</span>
        ))}
      </Tips>
    </Wrapper>
  );
};

ImageUploader.defaultProps = defaultProps;

export default ImageUploader;
