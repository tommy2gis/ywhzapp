/**
 * @Author: shitao
 * @Date: 2021-10-24 13:39:47
 * @LastEditTime: 2021-10-26 22:21:00
 * @LastEditors: shitao
 * @Description: 
 * @FilePath: \ywhzapp\src\Contact\Content.jsx
 * @无锡四维时空信息科技有限公司
 */
import React from 'react'
import { Tabs,Card,List} from 'antd';
import {  } from 'antd';
import locpng from './loc.png'

const { Meta } = Card;
const { TabPane } = Tabs;

export default function Content() {
    return (
        <div className="content_div">
            <div className="breadcrumb">
                <div style={{fontSize:20,fontWeight:600}}>联系我们</div>
                <div style={{margin:34}}>{`当前位置：网站首页 > 联系我们`}</div>
            </div>
            <div style={{maxWidth:1200,margin:'30px auto',textAlign:'center'}}>
            <div style={{color:'#498FA9',fontSize:26,margin:40}}>运帷汇质</div>
            <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={[1,2,3]}
                    renderItem={item => (
                    <List.Item>
                          <Card
                                hoverable
                                style={{ width: 240,margin:'auto'}}
                                title="华南分公司"
                            >
                                <Meta title="ISO9001" description="运帷汇质致力于协助中国制造成功升级，致力于实现中华民族伟大复兴" />
                            </Card>
                    </List.Item>
                    )}
                />
             <img alt="地址" style={{margin:20}} src={locpng}></img>
            </div>
             
        </div>
    )
}
