import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Button from 'components/atoms/Button';
import {
  ButtonDimensionsType,
  ButtonGroupsType,
} from 'components/atoms/Button/types';
import FacebookIcon from 'components/icons/Facebook';

const FacebookLoginButton = ({ onSuccess, onFailure }) => {
  const successResponseHandler = response => {
    onSuccess(response.accessToken);
  };

  const failureResponseHandler = error => {
    onFailure(error);
  };

  return (
    <FacebookLogin
      appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
      autoLoad={false}
      fields="name,email,picture"
      scope="public_profile,email"
      callback={successResponseHandler}
      onFailure={failureResponseHandler}
      render={renderProps => (
        <Button
          type="button"
          group={ButtonGroupsType.OutlinedBlack}
          dimension={ButtonDimensionsType.Regular}
          isLoading={false}
          disabled={false}
          prependIcon={FacebookIcon}
          onClick={renderProps.onClick}
        >
          Facebook
        </Button>
      )}
    />
  );
};

export default FacebookLoginButton;
