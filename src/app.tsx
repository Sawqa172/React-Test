/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import { useEffect ,FC} from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import TagManager from 'react-gtm-module';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './hoc/PrivateRoute';
// utils
import { $apiClient } from 'utils/request';
import ScrollToTop from './utils/scroll-to-top';

// hooks
import UtmTags from './hooks/utmTags';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// hoc
import withErrorHandler from 'hoc/withErrorHandler';

// actions
import { useAppSlice } from './store/modules/hook';
import { useLogoutSlice } from './store/modules/auth/logout/hook';
import { useProfileSlice } from './store/modules/user/profile/hook';

// selectors
import { selectIsAuthenticated } from './store/modules/selectors';
import { selectProfileData } from './store/modules/user/profile/selectors';

// layouts
// import { AuthLayout } from './components/layouts/AuthLayout/Loadable';
// import { ProfessionalLayout } from './components/layouts/ProfessionalLayout/Loadable';
import { UserLayout } from './components/layouts/UserLayout/Loadable';
import { StaticLayout } from './components/layouts/StaticLayout/Loadable';

// containers
import { Login as AuthLogin } from './containers/auth/Login/Loadable';
import { SignUp as AuthSignUp } from './containers/auth/SignUp/Loadable';
import { ResetPassword as AuthResetPassword } from './containers/auth/ResetPassword/Loadable';
import { RestorePassword as AuthRestorePassword } from './containers/auth/RestorePassword/Loadable';

import { Profile as UserProfile } from './containers/users/Profile/Loadable';
import { ProfileEdit as UserProfileEdit } from './containers/users/ProfileEdit/Loadable';

import { Home as StaticHome } from './containers/static/Home/Loadable';
import { Faq as StaticFaq } from './containers/static/Faq/Loadable';
// import { singleProduct as StaticFaq } from './containers/static/Faq/Loadable';

// types
import { RoleTypes } from './types/models/role';
import { ProfileIncludesTypes } from './store/modules/user/profile/types';

// styles
import { GlobalStyle } from 'styles/global-styles';
import ReactDOM from 'react-dom';
import axios from 'axios';

// toast modal configuration
toast.configure({
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: true,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  draggable: true,
  pauseOnHover: true,
});

AOS.init();

const App = () => {
  // init Google Tag Manager
  // const tagManagerArgs = {
  //   gtmId: process.env.REACT_APP_GTM_ID,
  //   dataLayerName: 'PageDataLayer',
  // };

  // TagManager.initialize(tagManagerArgs);

  // Logout slice to import logout store module
  useLogoutSlice();

  // hook slices
  const { actions: appActions } = useAppSlice();
  const { actions: profileActions } = useProfileSlice();

  // locales hook
  const { i18n } = useTranslation();

  // selectors
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const profileData = useSelector(selectProfileData);

  // actions
  const dispatch = useDispatch();
  const onTryAutoLogin = () => dispatch(appActions.autoLoginTrigger());
  const requestProfileData = payload =>
    dispatch(profileActions.fetchProfileDataTrigger(payload));

  // module mounted
  useEffect(() => {
    onTryAutoLogin();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // watch isAuthenticated - fetch profile
  useEffect(() => {
    if (isAuthenticated) {
      const role = RoleTypes.Client;
      const profileQuery = {
        include: [
          ProfileIncludesTypes.Roles,
          ProfileIncludesTypes.Purchase,
        ].join(','),
      };
      requestProfileData({ role, query: profileQuery });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);


  //get Products
//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//   },[])
//
// async function fetch (url:string) {
//     try{
//       let response = await axios.get(url)
//       console.log(response.data);
//     }
//     catch (e){
//       alert(e)
//     }
// }
  // render
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Helmet
        titleTemplate="%s | emotionFit"
        defaultTitle="Emotion Fit"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Emotional Fit Platform" />
      </Helmet>

      <ScrollToTop />
      <UtmTags />

      {/*{isAuthenticated && profileData?.roleName === RoleTypes.Professional && (*/}
      {/*  <ProfessionalLayout profile={profileData}>*/}
      {/*    <Switch>*/}
      {/*      <Route path="/dashboard" component={ProfessionalDashboard} />*/}
      {/*      <Route path="/profile" component={ProfessionalProfile} />*/}

      {/*      <Redirect to="/dashboard" />*/}
      {/*    </Switch>*/}
      {/*  </ProfessionalLayout>*/}
      {/*)}*/}

      {/*{isAuthenticated && profileData?.roleName === RoleTypes.Client && (*/}
      {/*<UserLayout>*/}
      {/*  <Switch>*/}
      {/*    /!*  profile  *!/*/}
      {/*    /!*<PrivateRoute path="/profile" component={UserProfile} exact />*!/*/}
      {/*    /!*<PrivateRoute path="/profile/edit" component={UserProfileEdit} />*!/*/}

      {/*    /!*  auth  *!/*/}
      {/*    /!*<Route path="/auth/login" component={AuthLogin} />*!/*/}
      {/*    /!*<Route path="/auth/sign-up" component={AuthSignUp} />*!/*/}

      {/*    /!*  password  *!/*/}
      {/*    /!*<Route path="/password/restore" component={AuthRestorePassword} />*!/*/}
      {/*    /!*<Route path="/password/reset" component={AuthResetPassword} />*!/*/}

      {/*    <Redirect to="/" />*/}
      {/*  </Switch>*/}
      {/*</UserLayout>*/}

      <StaticLayout>
        <Switch>
          <Route path="/" exact component={StaticHome} />
          <Route path="/faq" component={StaticFaq} />
          {/*<Route path="/home/singleProduct/:id" exact component={StaticSingleProduct} />*/}


          {/*<Route path="/privacy-policy" component={StaticPrivacyPolicy} />*/}
          {/*<Route path="/terms-of-service" component={StaticTermsOfService} />*/}
          <Redirect to="/" />
        </Switch>
      </StaticLayout>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default withErrorHandler(App, $apiClient);
