import React, {useEffect} from 'react';
import { Provider } from "react-redux";
import GlobalStyles from "./globalStyle/style";
// import Module from "./module";
import { store } from "./redux/store";
import AppRoutes from "./routes";
import { ConfigProvider } from "antd";



function App() {

  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: `"Roboto", sans-serif`,
            colorPrimary: '#025497', // Custom primary color
            // borderRadius:'90px'
          },
        }}
      >
        <GlobalStyles />
          <AppRoutes />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
