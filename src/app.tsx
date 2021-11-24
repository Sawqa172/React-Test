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



// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// hoc
import withErrorHandler from 'hoc/withErrorHandler';

// actions
import { useAppSlice } from './store/modules/hook';


// selectors
import { selectBag, selectIsAuthenticated } from './store/modules/selectors';


// layouts


import { StaticLayout } from './components/layouts/StaticLayout/Loadable';



import { Home as StaticHome } from './containers/static/Home/Loadable';
import { Faq as StaticFaq } from './containers/static/Faq/Loadable';
import { SingleProduct as StaticSingleProduct } from './containers/static/SingleProduct/Loadable';




// styles
import { GlobalStyle } from 'styles/global-styles';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { type } from 'os';
import { updateBagSaga } from './store/modules/saga';

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



  // hook slices
  const { actions: appActions } = useAppSlice();
  // locales hook
  const { i18n } = useTranslation();
  // actions
  const dispatch = useDispatch();

  //sync localStorage with Store
  useEffect(()=>{
    let localStorageBag:string | null = localStorage.getItem('bag')
    if(localStorageBag){
      let parsedLocalStorage = JSON.parse(localStorageBag)
      dispatch(appActions.updateBagTrigger(parsedLocalStorage))
    }
  },[])



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
      <StaticLayout>
        <Switch>
          <Route path="/" exact component={StaticHome} />
          <Route path="/faq" component={StaticFaq} />
          <Route path="/singleProduct/:id" exact component={StaticSingleProduct} />

          <Redirect to="/" />
        </Switch>
      </StaticLayout>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default withErrorHandler(App, $apiClient);
