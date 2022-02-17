/**
 * @Author: shitao
 * @Date: 2021-10-24 13:39:47
 * @LastEditTime: 2022-02-17 19:31:41
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\Guest\Content.jsx
 * @无锡四维时空信息科技有限公司
 */
import React, { useState, useRef } from "react";
import { Tabs, Card, List, Carousel, Button, Space, Image } from "antd";

const { Meta } = Card;
const { TabPane } = Tabs;

export default function Content() {
  const [detail, setdetail] = useState(null);
  const carousel = useRef(null);
  const showDetail = (item) => {
    setdetail(item);
  };
  return (
    <div className="content_div">
      <div className="breadcrumb">
        <div style={{ fontSize: 20, fontWeight: 600 }}>客户展示</div>
        <div style={{ margin: 34 }}>{`当前位置：网站首页 > 客户展示`}</div>
      </div>
      <div style={{ maxWidth: 1200, margin: "30px auto" }}>
        {detail ? (
          <div>
            <Carousel ref={carousel}>
              <Card bordered={false}>
                <Meta
                  title="客户展示1"
                  description={
                    <Image
                      width={600}
                      src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
                    />
                  }
                />
              </Card>
              <Card bordered={false}>
                <Meta
                  title="客户展示2"
                  description={
                    <Image
                      width={600}
                      src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
                    />
                  }
                />
              </Card>
              <Card bordered={false}>
                <Meta
                  title=""
                  description=""
                />
              </Card>
              <Card bordered={false}>
                <Meta
                  title=""
                  description=""
                />
              </Card>
            </Carousel>
            <Space>
              <Button
                onClick={() => {
                  carousel.current.prev();
                }}
              >
                上一篇
              </Button>
              <Button
                onClick={() => {
                  carousel.current.next();
                }}
              >
                下一篇
              </Button>
              <Button
                onClick={() => {
                  setdetail(null);
                }}
              >
                返回
              </Button>
            </Space>
          </div>
        ) : (
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={['精益生产', "IATF16949咨询", "五大工具", "VDA6.3咨询", "FMEA咨询", "GJB9001C","GJB9001C","精益生产","6S改善","AS9100培训","ISO三体系落地辅导"]}
            renderItem={(item,index) => (
              <List.Item onClick={() => showDetail(item)}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src={`/images/客户展示${index+1}.png`}
                    />
                  }
                >
                  <Meta title={item}  />
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
}
