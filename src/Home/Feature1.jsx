/**
 * @Author: shitao
 * @Date: 2021-10-19 21:21:50
 * @LastEditTime: 2021-10-24 12:03:26
 * @LastEditors: shitao
 * @Description: 
 * @FilePath: \ywhzapp\src\Home\Feature1.jsx
 * @无锡四维时空信息科技有限公司
 */
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import infopng from './assets/info3.png'

function Content1(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile
      ? {
          scaleY: '+=0.3',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        }
      : {
          x: '-=30',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        },
  };
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        <TweenOne
          key="img"
          animation={animType.one}
          resetStyle
          {...dataSource.imgWrapper}
        >
          <img src={infopng} style={{width:700}} alt="img" />
        </TweenOne>
 
      </OverPack>
    </div>
  );
}

export default Content1;
