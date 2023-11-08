import React from 'react';
// 로그인 상태 변수를 관리하는 context

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export default AuthContext;
