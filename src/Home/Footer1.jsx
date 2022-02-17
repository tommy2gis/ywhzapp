/**
 * @Author: shitao
 * @Date: 2021-10-19 21:21:50
 * @LastEditTime: 2022-02-17 19:42:23
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\Home\Footer1.jsx
 * @无锡四维时空信息科技有限公司
 */
import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Row, Col, Descriptions, Space } from "antd";
import ewmpng1 from './assets/ewm1.png';
import ewmpng2 from './assets/ewm2.png';

class Footer extends React.Component {
  static defaultProps = {
    className: "footer1",
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack}>
          <QueueAnim
            type="bottom"
            key="ul"
            leaveReverse
            component={Row}
            {...dataSource.block}
          >
            <Row>
              <Col span={12}>
                <Space direction="vertical">
                  <span style={{fontSize:16,color:'#fff'}}>联系我们</span>
                  <Space>
                    <div>
                      <Descriptions column={1}>
                        <Descriptions.Item label="地址">
                          无锡市新吴区天安智慧城A2-1002
                        </Descriptions.Item>
                        <Descriptions.Item label="手机">
                          19952755276,15358000212
                        </Descriptions.Item>
                      </Descriptions>
                    </div>
                    <div>
                      <Descriptions column={1}>
                        <Descriptions.Item label="邮箱">
                          winway@vip.126.com
                        </Descriptions.Item>
                        <Descriptions.Item label="QQ">
                          472180111
                        </Descriptions.Item>
                      </Descriptions>
                    </div>
                  </Space>
                  竭诚欢迎您光临指导、洽谈合作等事宜，您可以通过以上方式与我们取得联系。感谢您对我们的关注！
                </Space>
              </Col>
              <Col span={12} style={{textAlign:'right'}}>
              <Space direction="vertical">
                  <span style={{fontSize:16,color:'#fff'}}>媒体关注</span>
                  <Space size={20}>
                    <div><img src={ewmpng1}></img><br/>扫描二维码添加微信</div>
                    <div><img src={ewmpng2}></img><br/>扫描二维码关注公众号</div>
                  </Space>
                </Space>
              </Col>
            </Row>
          </QueueAnim>
          <TweenOne
            animation={{ y: "+=30", opacity: 0, type: "from" }}
            key="copyright"
            {...dataSource.copyrightWrapper}
          >
            <div {...dataSource.copyrightPage}>
              <div {...dataSource.copyright}>
                {dataSource.copyright.children}
              </div>
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
