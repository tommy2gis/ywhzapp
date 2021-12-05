/**
 * @Author: shitao
 * @Date: 2021-10-24 13:04:55
 * @LastEditTime: 2021-12-05 18:45:15
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\Business\Banner.jsx
 * @无锡四维时空信息科技有限公司
 */
import React from "react";
import { TweenOneGroup } from "rc-tween-one";
import "rc-banner-anim/assets/index.css";


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
              <div className="bg bgbusiness"></div>
              <div className="banner1-text-wrapper">
                <div
                  className="banner1-title"
                  style={{fontSize:46,width:800,letterSpacing:2,marginTop:70}}
                >
                  运帷汇质体系咨询业务基于中国制造业现状着眼于未来的发展趋势
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
