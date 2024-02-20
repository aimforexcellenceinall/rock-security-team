import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(process.env.REACT_APP_RECAPTCHA_KEY),
  isTokenAutoRefreshEnabled: true
})