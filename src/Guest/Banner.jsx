/**
 * @Author: shitao
 * @Date: 2021-10-24 13:04:55
 * @LastEditTime: 2021-10-26 21:52:16
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\Guest\Banner.jsx
 * @无锡四维时空信息科技有限公司
 */
import "rc-banner-anim/assets/index.css";
import { TweenOneGroup } from "rc-tween-one";
import React from "react";


class Banner extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    delete props.isMobile;
    return (
      <div className='banner1'>
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: "from" }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className="banner1-wrapper" key="wrapper">
            <div
              className="banner-anim-elem banner-user-elem"
            >
              <div className="bg bkguest"></div>
              <div className="banner1-text-wrapper">
                <div
                  className="banner1-title"
                  style={{fontSize:46,width:800,letterSpacing:2,marginTop:70}}
                >
                  帮助企业梳理核心流程，聚焦核心过程和增值过程促进管理流程优化，提升企业管理效率
                </div>
              </div>
            </div>
          </div>
        </TweenOneGroup>
      </div>
    );
  }
}

export default Banner;
