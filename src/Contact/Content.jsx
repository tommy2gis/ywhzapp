/**
 * @Author: shitao
 * @Date: 2021-10-24 13:39:47
 * @LastEditTime: 2021-11-14 10:41:56
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\Contact\Content.jsx
 * @无锡四维时空信息科技有限公司
 */
import React, { useState } from "react";
import { Tabs, Card, List, Modal,Descriptions} from "antd";
import {} from "antd";
import locpng from "./loc.png";

const { Meta } = Card;
const { TabPane } = Tabs;

export default function Content() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showitem, setshowitem] = useState(null)
  
  const onItemClick = (item) => {
    setIsModalVisible(true);
    setshowitem(item)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="content_div">
      <div className="breadcrumb">
        <div style={{ fontSize: 20, fontWeight: 600 }}>联系我们</div>
        <div style={{ margin: 34 }}>{`当前位置：网站首页 > 联系我们`}</div>
      </div>
      <div style={{ maxWidth: 1200, margin: "30px auto", textAlign: "center" }}>
        <div style={{ color: "#498FA9", fontSize: 26, margin: 40 }}>
          运帷汇质
        </div>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={[
            {
              name: "华南分公司",
              QQ: "472180111",
              tel: "19952755276",
              contact: "谭老师",
              email: "winwaya@vip.126.com",
              address: "无锡市新吴区天安智慧城A2-1002",
            },
            {
              name: "华中分公司",
              QQ: "472180111",
              tel: "19952755276",
              contact: "谭老师",
              email: "winwaya@vip.126.com",
              address: "无锡市新吴区天安智慧城A2-1002",
            },
            {
              name: "西南分公司",
              QQ: "472180111",
              tel: "19952755276",
              contact: "谭老师",
              email: "winwaya@vip.126.com",
              address: "无锡市新吴区天安智慧城A2-1002",
            },
          ]}
          renderItem={(item) => (
            <List.Item onClick={()=>onItemClick(item)}>
              <Card
                hoverable
                style={{ width: 240, margin: "auto" }}
                title={item.name}
              >
                <Meta
                  title="ISO9001"
                  description="运帷汇质致力于协助中国制造成功升级，致力于实现中华民族伟大复兴"
                />
              </Card>
            </List.Item>
          )}
        />
        <img alt="地址" style={{ margin: 20 }} src={locpng}></img>
      </div>
      <Modal
        title={showitem?showitem.name:""}
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Descriptions column={1}>
            <Descriptions.Item label="联系人">{showitem?showitem.name:""}</Descriptions.Item>
            <Descriptions.Item label="手机">{showitem?showitem.tel:""}</Descriptions.Item>
            <Descriptions.Item label="QQ">{showitem?showitem.QQ:""}</Descriptions.Item>
            <Descriptions.Item label="邮箱">{showitem?showitem.email:""}</Descriptions.Item>
            <Descriptions.Item label="地址">
            {showitem?showitem.address:""}
            </Descriptions.Item>
        </Descriptions>
      </Modal>
    </div>
  );
}
