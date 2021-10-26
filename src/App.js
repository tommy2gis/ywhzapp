/*
 * @Author: shitao
 * @Date: 2021-10-19 21:19:18
 * @LastEditTime: 2021-10-26 22:07:55
 * @LastEditors: shitao
 * @Description: 
 * @FilePath: \ywhzapp\src\App.js
 * 无锡四维时空信息科技有限公司
 */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Index';
import Business from './Business/index';
import News from './News/index';
import Guest from './Guest/index';
import Contact from './Contact/index';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';



const App = () => (
    <ConfigProvider locale={zh_CN}>
      <HashRouter>

        <Switch>
          <Route exact path="/" component={() => <><Home></Home></>} />
          <Route path="/business" component={() => <Business></Business>} />
          <Route path="/news" component={() => <News></News>} />
          <Route path="/guest" component={() => <Guest></Guest>} />
          <Route path="/contact" component={() => <Contact></Contact>} />
          
        </Switch>
      </HashRouter>
    </ConfigProvider>
);

export default App;