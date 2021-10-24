/**
 * @Author: shitao
 * @Date: 2021-10-19 21:21:50
 * @LastEditTime: 2021-10-23 21:21:20
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\Home\Feature0.jsx
 * @无锡四维时空信息科技有限公司
 */
import React from "react";
import QueueAnim from "rc-queue-anim";
import { Row, Col, Card } from "antd";
import { OverPack } from "rc-scroll-anim";
import { getChildrenToRender } from "./utils";
import infopng from "./assets/info.png";
import edupng from "./assets/edu.png";
import multiplepng from "./assets/multiple.png";
import qiyepng from "./assets/qiye.png";

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
            <Row>
              <Col span={12}>
                <img src={infopng} />
              </Col>
              <Col
                span={12}
                style={{ color: "#8A928B", padding: 20, fontSize: 16 }}
              >
                运帷汇质成立于2019年7月，旨在服务转型之际的中国制造业，致力于协助中国
                制造业成功转型升级，实现中华民族的伟大复兴，公司立足长三角太湖明珠无锡，
                辐射全中国
              </Col>
            </Row>
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component="div"
              componentProps={childWrapper}
            >
              <Row gutter={24}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img src={multiplepng} />}
                  >
                    <Card.Meta title="18+" description="现有咨询师18名" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img src={qiyepng} />}
                  >
                    <Card.Meta title="500" description="世界五百强企业出身" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img src={edupng} />}
                  >
                    <Card.Meta
                      title="985/211"
                      description="双一流高校毕业教育背景"
                    />
                  </Card>
                </Col>
              </Row>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content;
