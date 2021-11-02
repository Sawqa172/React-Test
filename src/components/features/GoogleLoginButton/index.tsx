import GoogleLogin from 'react-google-login';
import {
  ButtonDimensionsType,
  ButtonGroupsType,
} from 'components/atoms/Button/types';
import GoogleIcon from 'components/icons/Google';
import Button from 'components/atoms/Button';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const successResponseHandler = response => {
    onSuccess(response.accessToken);
  };

  const failureResponseHandler = error => {
    onFailure(error);
  };

  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}`}
      buttonText="Google"
      onSuccess={successResponseHandler}
      onFailure={failureResponseHandler}
      cookiePolicy="single_host_origin"
      render={renderProps => (
        <Button
          type="button"
          group={ButtonGroupsType.OutlinedBlack}
          dimension={ButtonDimensionsType.Regular}
          isLoading={false}
          disabled={false}
          prependIcon={GoogleIcon}
          onClick={renderProps.onClick}
        >
          Google
        </Button>
      )}
    />
  );
};

export default GoogleLoginButton;
