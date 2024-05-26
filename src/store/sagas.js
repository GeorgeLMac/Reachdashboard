import { all, fork } from "redux-saga/effects";

//public
// import AccountSaga from "./auth/register/saga";
// import AuthSaga from "./auth/login/saga";
// import ForgetSaga from "./auth/forgetpwd/saga";
// import ProfileSaga from "./auth/profile/saga";
 import LayoutSaga from "./layout/saga";

import dashboardSaga from "./dashboard/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(dashboardSaga)
  ]);
}
