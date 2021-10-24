/**
 * @Author: shitao
 * @Date: 2021-10-24 13:04:55
 * @LastEditTime: 2021-10-24 21:21:00
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\News\Banner.jsx
 * @无锡四维时空信息科技有限公司
 */
import React from "react";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";
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
              <div className="bg bknews"></div>
              <div className="banner1-text-wrapper">
                <div
                  className="banner1-title"
                  style={{fontSize:46,width:800,letterSpacing:2,marginTop:70}}
                >
                  运帷汇质提供专业支持和辅导
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
