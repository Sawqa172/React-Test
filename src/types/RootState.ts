import { ThemeState } from 'styles/theme/slice/types';
import { AppState } from 'store/modules/types';
import { UtilsState } from 'store/modules/utils/types';

// static
import { FaqState } from 'store/modules/static/faq/types';
import { HomeState } from 'store/modules/static/home/types';

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life.
  So, not available always
*/
export interface RootState {
  theme?: ThemeState;
  app?: AppState;
  utils?: UtilsState;

  // // auth
  // login?: LoginState;
  // logout?: LogoutState;
  // signUp?: SignUpState;
  // resetPassword?: ResetPasswordState;
  // restorePassword?: RestorePasswordState;
  // providerLogin?: ProviderLoginState;

  // static
  faq?: FaqState;
  home?: HomeState;

  // user
  // profile?: ProfileState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
