/**
 * @Author: shitao
 * @Date: 2021-10-24 13:04:55
 * @LastEditTime: 2021-10-26 21:59:28
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\Contact\Banner.jsx
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
              <div className="bg bkcontact"></div>
              <div className="banner1-text-wrapper">
                <div
                  className="banner1-title"
                  style={{fontSize:46,width:800,letterSpacing:2,marginTop:70}}
                >
                  公司旨在服务转型之际的中国制造业致力于协助中国制造业成功转型升级
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
