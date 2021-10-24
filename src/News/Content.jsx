/**
 * @Author: shitao
 * @Date: 2021-10-24 13:39:47
 * @LastEditTime: 2021-10-24 21:55:24
 * @LastEditors: shitao
 * @Description: 
 * @FilePath: \ywhzapp\src\News\Content.jsx
 * @无锡四维时空信息科技有限公司
 */
import React from 'react'
import { Tabs,Card,List} from 'antd';
import {  } from 'antd';

const { Meta } = Card;
const { TabPane } = Tabs;

export default function Content() {
    return (
        <div className="content_div">
            <div className="breadcrumb">
                <div style={{fontSize:20,fontWeight:600}}>新闻中心</div>
                <div style={{margin:34}}>{`当前位置：网站首页 > 新闻中心`}</div>
            </div>
            <div style={{maxWidth:1200,margin:'30px auto'}}>
            <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={[1,2,3,4,5,6]}
                    renderItem={item => (
                    <List.Item>
                          <Card
                                hoverable
                                style={{ width: 240 }}
                                title="新闻动态"
                            >
                                <Meta title="ISO9001" description="详细信息" />
                            </Card>
                    </List.Item>
                    )}
                />
            </div>
             
        </div>
    )
}
