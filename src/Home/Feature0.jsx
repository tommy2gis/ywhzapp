/**
 * @Author: shitao
 * @Date: 2021-10-19 21:21:50
 * @LastEditTime: 2021-10-19 21:41:11
 * @LastEditors: shitao
 * @Description: 
 * @FilePath: \ywhzapp\src\Home\Feature0.jsx
 * @无锡四维时空信息科技有限公司
 */
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import {OverPack} from 'rc-scroll-anim';
import { getChildrenToRender } from './utils';

class Content extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    <div {...item}>
                      {item.children.map(getChildrenToRender)}
                    </div>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
