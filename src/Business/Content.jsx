/**
 * @Author: shitao
 * @Date: 2021-10-24 13:39:47
 * @LastEditTime: 2022-02-17 18:27:46
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\Business\Content.jsx
 * @无锡四维时空信息科技有限公司
 */
import React, { useState, useRef,useEffect } from "react";
import { Tabs, Card, List, Carousel, Button, Space } from "antd";
import {datas} from './data'

const { Meta } = Card;
const { TabPane } = Tabs;



export default function Content() {
  const [detail, setdetail] = useState(null);
  const [index, setindex] = useState(0);
  const carousel = useRef(null);
  const showDetail = (item,index) => {
    setdetail(item);
    setindex(index)
  };

  useEffect(() => {
    if(carousel.current){
      carousel.current.goTo(index);
    }
    
  }, [index])
  return (
    <div className="content_div">
      <div id="breadcrumb" className="breadcrumb">
        <div style={{ fontSize: 20, fontWeight: 600 }}>业务范围</div>
        <div style={{ margin: 34 }}>{`当前位置：网站首页 > 业务范围`}</div>
      </div>
      <div  style={{ maxWidth: 1200, margin: "30px auto" }}>
        {detail ? (
          <div >
            <Carousel id="ant-carousel"  ref={carousel} >
             { datas.map(data => {
                return <Card bordered={false}>
                 <Meta
                   title={data.title}
                   description={<div style={{textAlign:'left',maxHeight:600,overflow:'auto'}} dangerouslySetInnerHTML={{__html:data.content}}></div>}
                 />
               </Card>
              })}
             
             
            </Carousel>
            <Space>
              <Button
                onClick={() => {
                  carousel.current.prev();
                  document.getElementById("breadcrumb").scrollIntoView(true)
                }}
              >
                上一篇
              </Button>
              <Button
                onClick={() => {
                  carousel.current.next();
                  document.getElementById("breadcrumb").scrollIntoView(true)
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
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="质量管理认证" key="1">
              <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={datas}
                renderItem={(item,index) => (
                  <List.Item onClick={() => showDetail(item,index)}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          style={{width:240,height:240}}
                          alt="example"
                          src={item.img}
                        />
                      }
                    >
                      <Meta title={item.title} description="详细信息" />
                    </Card>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="精益生产" key="2">
              <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={[1, 2, 3, 4]}
                renderItem={(item) => (
                  <List.Item >
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          style={{width:240,height:150}}
                          src={`/images/精益生产${item}.jfif`}
                        />
                      }
                    >
                      <Meta title="精益生产" />
                    </Card>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="项目申报" key="3">
              <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={[1, 2, 3, 4]}
                renderItem={(item) => (
                  <List.Item >
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt="example"
                          src={`/images/项目申报${item}.png`}
                        />
                      }
                    >
                      <Meta title="项目申报"  />
                    </Card>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        )}
      </div>
    </div>
  );
}
