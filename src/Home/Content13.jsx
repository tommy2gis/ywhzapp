/**
 * @Author: shitao
 * @Date: 2021-10-19 21:21:50
 * @LastEditTime: 2021-10-23 22:27:18
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\Home\Content13.jsx
 * @无锡四维时空信息科技有限公司
 */
import React from "react";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Row, Col, Input, Button } from "antd";
import infopng from "./assets/info2.png";

class Content13 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <OverPack {...props} {...dataSource.OverPack}>
        <QueueAnim
          type="bottom"
          leaveReverse
          key="page"
          delay={[0, 100]}
          {...dataSource.titleWrapper}
        >
          <Row>
            <Col
              span={12}
              style={{
                color: "#FFF",
                padding: 20,
                fontSize: 16,
                textAlign: "left",
                paddingRight: 100,
              }}
            >
              我们会认真查阅您反馈的每一个问题，并尽快给您答复，在这里您可
              以提出遇到的问题，也可以发表自己的建议和想法。
            </Col>
            <Col span={12}>
              <img src={infopng} />
            </Col>
          </Row>
          <div style={{textAlign:'left',color:'#fff',marginTop:60}}>
          为了让您尽快得到反馈，请留下您的联系方式:
          <Row style={{margin:'20px -8px'}} gutter={16}>
            <Col span={5}>
              <Input prefix="姓名" />
            </Col>
            <Col span={5}>
              <Input prefix="电话" />
            </Col>
            <Col span={5}>
              <Input prefix="邮箱" />
            </Col>
            <Col span={9}>
              <Input prefix="地址" />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={15}>
              <Input prefix="内容" />
            </Col>
            <Col span={6}>
              <Button ghost>提交留言</Button>
            </Col>
          </Row>
          </div>
         
        </QueueAnim>
      </OverPack>
    );
  }
}

export default Content13;
