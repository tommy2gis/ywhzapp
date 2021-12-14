/*
 * @Author: shitao
 * @Date: 2021-12-05 18:30:42
 * @LastEditTime: 2021-12-14 18:40:09
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \ywhzapp\src\Business\data.js
 * 无锡四维时空信息科技有限公司
 */
const defaultimg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==";
export const datas= [
  { title: "ISO9001", img: "/ywhzapp/images/iso9001.jpg",
  content: `<p>　　一、什么是ISO9001</p>
  <p>　　ISO9001标准是国际标准化组织(ISO)在1987年提出的概念，是指由ISO/TC176(国际标准化组织质量管理和质量保证及时委员会)制定的国际标准。通过认证的企业证明在各项质量管理上达到国际标准，能持续稳定地向顾客提供预期和满意的合格产品。</p>
  <p>　　二、ISO9001 认证意义</p>
  <p>　　1、通过认证使企业具有了走向市场的通行证。</p>
  <p>　　2、增进国际贸易，消除技术壁垒，与国际先进管理惯例接轨，融入一体化国际经济体系。</p>
  <p>　　3、规范内部管理，强调全员参与，增强员工质量意识，提高运行效率和整体业绩。</p>
  <p>　　4、增强质量管理的稳定性，保证产品质量的一致性，优化质量成本，减少质量损失，提高经济效益。</p>
  <p>　　5、强调以顾客为关注焦点，满足顾客不断变化的要求和法律法规要求，提高市场占有份额。</p>
  <p>　　6、强调持续改进，全面提高企业综合素质和整体水平，使企业不断发展壮大。</p>
  <p>　　三、ISO9000认证特点</p>
  <p>　　1、以八项质量管理原则作为标准的理论基础，体现了质量管理最普遍、最通用的规律。</p>
  <p>　　2、ISO9000的标准具有广泛的适用性，适用于各种类型、不同规模和提供不同产品的组织。</p>
  <p>　　3、经过三次修订，使标准在内容上更科学，广泛适用性和可操作性更强。</p>
  <p>　　4、与ISO14000环境管理体系标准、OHSAS18000职业健康安全管理体系标准等的兼容性更好。</p>
  <p>　　四、ISO9000认证原则</p>
  <p>　　1、以顾客为关注焦点：组织依存于其顾客。因此组织应理解顾客当前和未来的需求，满足顾客并争取超越顾客期望。</p>
  <p>　　2、领导作用：领导者确立本组织统一的宗旨和方向。他们应该创造并保持使员工能充分参与实现组织目标的内部环境。</p>
  <p>　　3、全员参与：各级人员是组织之本，只有他们的充分参与，才能使他们的才干为组织获益。</p>
  <p>　　4、过程方法：将相关的活动和资源作为过程进行管理，可以更高效地得到期望的结果。</p>
  <p>　　5、管理的系统方法：识别、理解和管理作为体系的相互关联的过程，有助于组织实现其目标的效率和有效性。</p>
  <p>　　6、持续改进：组织总体业绩的持续改进应是组织的一个永恒的目标。</p>
  <p>　　7、基于事实的决策方法：有效决策是建立在数据和信息分析基础上。</p>
  <p>　　8、互利的供方关系：组织与其供方是相互依存的，互利的关系可增强双方创造价值的能力。</p>
  <p>　　五、认证咨询流程</p>
  <p>　　第一步：咨询老师初访，对公司有个大概的了解，对公司作出分析与策划。</p>
  <p>　　第二步：让员工了解标准内容和9001的可行性，对公司负责人及相关人员进行内审员培训。</p>
  <p>　　第三步:咨询老师针对性的指导工作组，编写流程图，产品描述，确定关键控制点，确定方针，目标，承诺和组织机构，确定体系结构及采用标准条款程度，进行管理手册，程序文件的编写，修订。</p>
  <p>　　第四步：咨询师对公司各部门的文件进行总结性的详细的发布。</p>
  <p>　　第五步：体系正式运行，公司上下全动员进行系统的运行。内部开展一次试验性的审核，然后管理评审，进行改进。</p>
  <p>　　第六步：提交申请，进行正式审核，审核员对不符合项提出意见进行整改，并在咨询老师协助下，企业顺利通过整改关闭，取证及后续的持续改进和努力。</p>
  <p>　　六、签订合同所需资料</p>
  <p>　　1. 营业执照，组织机构代码证副本复印件;</p>
  <p>　　2. 企业简介、组织机构图、部门负责人的职责权限人员名单;</p>
  <p>　　3. 客户服务合同(客户名称、产品名称、数量、签订日期)，至少两份合同;</p>
  <p>　　4. 质量手册、程序文件及公司执行的各种现有管理制度，填写的表格文件;</p>
  <p>　　5. 供方名称、地址、电话及采购的相应产品的相关表格记录;</p>
  <p>　　6. 公司总经理姓名、质量负责人、公司电话、传真、邮编;</p>
  `},
  { title: "ISO14001", content: `<p><strong>ISO14001</strong><strong>环境管理体系认证</strong>，是指依据<a href="https://baike.baidu.com/item/ISO14001/3501194">ISO14001</a>标准由第三方认证机构实施的合格评定活动。ISO14001是由<a href="https://baike.baidu.com/item/%E5%9B%BD%E9%99%85%E6%A0%87%E5%87%86%E5%8C%96%E7%BB%84%E7%BB%87/779832">国际标准化组织</a>发布的一份标准，是ISO14000族标准中的一份标准，该标准于1996年进行首次发布，2004年分别由ISO国际标准化组织对该标准进行了修订，最新版本为ISO14001-2015。</p>
  <p>第一阶段，建立并实施ISO14001环境管理体系阶段</p>
  <p>这一阶段，组织应建立并实施ISO14001环境管理体系，从形式上符合ISO14001标准的要求。</p>
  <p>ISO14001环境管理体系的建立和实施遵循自愿原则，由组织最高管理者决策是否建立和实施ISO14001环境管理体系。如果组织决定建立体系，具体应完成以下几个方面的工作：</p>
  <p>首先，要做好人、财、物方面的准备。由最高管理者书面任命环境管理者代表。最高管理者应授权建立相应的机构，并给予人力和财物方面的支持，以保证体系建立和运行的需要。</p>
  <p>第二，要做好<a href="https://baike.baidu.com/item/%E5%88%9D%E5%A7%8B%E7%8E%AF%E5%A2%83%E8%AF%84%E5%AE%A1/1105714">初始环境评审</a>。这项工作是对组织的环境管理情况进行评价，总结经验，找出存在的主要环境问题并分析其风险，以确定控制方法和将来的改进方向。一般来说，要做初始环境评审，先应组建由从事环保、生产、技术、设备等各方面的人员组成工作组。工作组要完成法律法规的识别和评价，环境因素的识别和评价，现有环境管理制度和ISO14001标准差距的评价，并形成初始环境评审报告。</p>
  <p>第三，要完成环境管理体系策划工作。所谓的环境管理体系策划，就是根据<a href="https://baike.baidu.com/item/%E5%88%9D%E5%A7%8B%E7%8E%AF%E5%A2%83%E8%AF%84%E5%AE%A1/1105714">初始环境评审</a>的结果和组织的经济技术实力，制定环境方针；确定环境管理体系构架；确定组织机构与职责；制定目标、指标、环境管理方案；确定哪些环境活动需要制定运行控制程序。</p>
  <p>第四，编制体系文件。ISO14001环境管理体系是一个文件化的环境管理体系，需编制环境管理手册、程序文件、作业指导书等。</p>
  <p>第五，运行环境管理体系。环境管理体系文件编制完成，正式颁布，就标志着环境管理体系已经建立并投入运行。</p>
  <p>在体系运行期间，为审查组织的环境管理活动是否已按环境管理体系文件的规定进行，环境管理体系是否得到了正确的实施和保持，为确定体系的持续适用性、充分性、有效性，组织应组织内部审核和管理评审。</p>
  <p>贯穿这些工作始终的另一项重要工作是全员培训。建立和实施环境管理体系强调全员参与。建立和实施环境管理体系的任何一个环节，都有赖于全体人员共同努力，任何一个员工都不可能游离于体系之外，为使他们都能理解并以实际行动支持体系的建立和运行，组织必须进行充分的培训，内容从ISO14001标准，到环境方针，到适用法律法规，到个人职责，到重要环境因素，到体系文件，到作业指导书，到运行记录&hellip;&hellip;</p>
  <p>如果组织在建立和实施体系的过程中，需要人员培训和技术支持，可以向环境管理体系咨询机构寻求帮助。按照我国规定，ISO14001环境管理体系咨询机构必须在国家环保总局科技司注册备案。</p>
  <p>第二阶段，认证取证阶段。</p>
  <p>经过内审和管理评审，组织如果确认其环境管理体系基本符合ISO14001标准要求，对组织适用性较好，且运行充分、有效，可向已获得中国环境管理体系认证机构认可委员会认可有认证资格的认证机构提出认证申请并签定认证合同，进入ISO14001环境管理体系认证审核阶段。</p>
  <p>认证审核是认证机构受组织委托，以第三方身份对组织的环境管理体系与ISO14001环境管理体系标准的符合性和运行、保持的有效性进行审核验证，并确定是否向组织发放认证证书的过程。</p>
  <p>为接受认证机构的认证审核，组织应做好充分准备，保持体系有效运行。认证机构会派出审核组，审核组将对组织实施认证审核。认证审核包括第一阶段审核和第二阶段现场审核。在组织完成第二阶段现场审核开具的不符合纠正并经过审核组验证关闭后，机构经过认证评定，将确定是否批准组织的认证注册和颁发认证证书。</p>
  <p>认证证书有效期三年，三年内，组织要多次接受机构的监督审核；三年后，组织要申请复审，重新注册获得证书，此过程同第一次认证取证。</p>`, img: defaultimg },
  { title: "ISO45001", content: `　　<p>一、职业健康安全管理体系是什么</p>
  <p>　　iso45001职业健康安全管理体系是由英国标准协会(BSI)、挪威船级社(DNV)&nbsp;等13个组织于1999年联合推出的国际性标准，它是组织(企业)建立职业健康安全管理体系的基础，也是企业进行内审和认证机构实施认证审核的主要依据。它是继实施ISO9000、ISO14000国际标准之后的又一个热点。</p>
  <p>　　二、职业健康安全管理体系认证范围</p>
  <p>　　为明确职业安全健康管理体系的基本要求，鼓励用人单位采用合理的职业安全健康管理原则与方法，控制其职业安全健康风险，持续改进职业安全健康绩效，特制定职业安全健康管理体系审核规范。</p>
  <p>　　此规范适用于任何有以下愿望的用人单位:</p>
  <p>　　1、建立职业安全健康管理体系，有效地消除和尽可能降低员工和其他有关人员可能遭受的与用人单位活动有关的风险;</p>
  <p>　　2、实施、维护并持续改进其职业安全健康管理体系;</p>
  <p>　　3、保证遵循其声明的职业安全健康方针;</p>
  <p>　　4、向社会表明其职业安全健康工作原则;</p>
  <p>　　5、谋求外部机构对其职业安全健康管理体系进行认证和注册;</p>
  <p>　　6、自我评价并声明符合本规范。</p>
  <p>　　三、职业健康安全管理体系认证意义</p>
  <p>　　1、为企业提高职业健康安全绩效提供了一个科学、有效的管理手段;</p>
  <p>　　2、有助于推动职业健康安全法规和制度的贯彻执行;</p>
  <p>　　3、使组织的职业健康安全管理由被动强制行为转变为主动自愿行为，提高职业健康安全管理水平;</p>
  <p>　　4、有助于消除贸易壁垒;</p>
  <p>　　5、对企业产生直接和间接的经济效益;</p>
  <p>　　6、将在社会上树立企业良好的品质和形象。</p>`, img: defaultimg},
  { title: "ISO27001", content: `　　<p>一、什么是ISO27001认证</p>
  <p>　　信息安全管理体系是目前国际上最先进信息安全整体解决方案。它以组织风险评估为基石，运用PDCA过程方法和114项信息安全控制措施来帮助组织解决信息安合问题，实现信息安全目标。多运用于政府、电信、银行、金融、互联网等大型组织或者供应商的行为对项目风险管理起关键作用的项目。</p>
  <p>　　二、认证ISO27001的意义</p>
  <p>　　1、预防信息安全事故，保证组织业务的连续性，使组织的重要信息资产受到与其价值相符的保护，包括防范：</p>
  <p>　　1) 重要的商业秘密信息的泄漏、丢失、篡改和不可用;</p>
  <p>　　2) 重要业务所依赖的信息系统因故障、遭受病毒或攻击而中断;</p>
  <p>　　2、节省费用。一个好的ISMS不仅可通过避免安全事故而使组织节省费用，而且也能帮助组织合理筹划信息安全费用支出，包括：</p>
  <p>　　1) 依据信息资产的风险级别，安排安全控制措施的投资优先级;</p>
  <p>　　2) 对于可接受的信息资产的风险，不投资安全控制;</p>
  <p>　　保持组织良好的竞争力和成功运作的状态，提高在公众中的形象和声誉，最大限度的增加投资回报和商业机会;</p>
  <p>　　增强客户、合作伙伴等相关方的信任和信心。</p>
  <p>　　三、ISMS建立和运行的流程</p>
  <p>　　1、策划与准备</p>
  <p>　　1、</p>
  <p>　　四、认证所需申请材料</p>
  <p>　　1、认证申请条件</p>
  <p>　　1)、申请方应具有明确的法律地位;</p>
  <p>　　2)、受审核方已经按照ISMS标准建立文件化的管理体系;</p>
  <p>　　3)、现场审核前，受审核方的管理体系至少有效运行三个月并进行了一次完整的内部审核和管理评审;</p>
  <p>　　2、认证须提交的材料清单</p>
  <p>　　1)、法律地位证明文件(如企业法人营业执照、组织机构代码证书)</p>
  <p>　　2)、有效的资质证明、产品生产许可证强制性产品认证证书等(需要时)</p>
  <p>　　3)、组织简介(产品及与产品/服务有关的技术标准、强制性标准、使用设备、人员情况等)</p>
  <p>　　4)、 申请认证产品的生产、加工或服务工艺流程图;</p>
  <p>　　5)、服务场所、多场所需提供清单;</p>
  <p>　　6)、管理手册、程序文件及组织机构图;</p>
  <p>　　7)、服务器数量以及终端数量;</p>
  <p>　　8)、服务计划、服务报告、容量计划</p>`, img: defaultimg},
  { title: "ISO20000", content: `　　<p>一、什么是ISO/IEC 20000</p>
  <p>　　采用PDCA管理模式作为持续改进模型的基础，将业务要求和客户要求作为最主要和出发点和最终的着陆点，通过对主要服务过程的有序化管理，促使业务成果和顾客满意的达成。</p>
  <p>　　作为认证组织的IT运营和服务管理水平的国际标准，多运用于政府、电信、银行、金融、互联网等大型组织或者供应商的行为对项目识别和管理IT服务的关键过程起关键作用的项目。</p>
  <p>　　ISO20000是第一部针对信息技术服务管理(IT Service Management)领域的国际标准，它于2005年12月15日发布。作为认证组织的IT运营和服务管理水平的国际标准，ISO20000具体规定了IT服务管理行业向企业及其客户有效地提供服务的、一体化的管理过程以及过程建立的相关要求，帮助识别和管理IT服务的关键过程，保证提供有效的IT服务以满足客户和业务的需求。它着重于通过&ldquo;IT服务标准化&rdquo;来管理IT问题，即将IT问题归类，识别问题的内在联系，然后依据服务级别协议进行计划、管理和监控，并强调与客户的沟通。</p>
  <p>　　IT服务管理国际标准ISO20000的最新版本(ISO/IEC20000-1:2011)于2011年4月15日正式发布。新版从整体结构到术语和定义对ISO/IEC20000-1:2005版进行了修订，进一步与ITIL V3.ISO27001和ISO9001融合，体现了最新的服务管理最佳实践。</p>
  <p>　　二、ISO/IEC20000标准的特点</p>
  <p>　　a)适用于所有使用IT技术的内部IT服务提供部分和外部IT服务业务提供商与《ISO/IEC20000-2:2005:Information technology--Part2;Codeof Practice&gt;&gt;(信息技术-服务管理-Part2:实践规则)--起覆盖了ITIL中的全部最佳实践集，便于已实施ITIL的企业转化应用，易于对实施ITIL有经验的人士理解和接受。</p>
  <p>　　b)与ISO9001、CMMI、ISO/IEC27001等具有良好兼容性。</p>
  <p>　　三、企业实施通过ISO20000带来的竞争优势</p>
  <p>　　对外：</p>
  <p>　　1.获得业界普遍认同的国际证书ISO20000 认证;</p>
  <p>　　2.就服务质量和服务承诺与客户及供应商达成一致，建立和客户及供应商统一的沟通平台;达到相关利益方均满足的IT服务管理目标;</p>
  <p>　　3.持续优化服务流程，提升服务水平，提高客户满意度;进一步拓展公司业务，提升市场份额。</p>
  <p>　　对内：</p>
  <p>　　1.明晰管理成本和公司战略目标的结合点，完善现有服务产品和资源配置，使各项资源的运用符合公司战略目标;</p>
  <p>　　2.通过对流程和权责的定义，监控管理流程、进行绩效评价，提高流程执行效率;</p>
  <p>　　3.建立成体系的管理模型了解自身资源情况和能力水平;</p>
  <p>　　4.降低业务运营的管理成本和风险;</p>
  <p>　　5.提升公司整体运作及部门沟通的能力;</p>
  <p>　　6.培养 ITIL/ISO20000的专业人才;</p>
  <p>　　7.将管理体系(ISO9000、CMMI、ISO27001 和 ISO20000)和业务流程整合;</p>
  <p>　　8.建立一整套行之有效的持续改善机制。</p>
  <p>　　9.改善质量，提高生产率，降低成本，增加投资回报率</p>
  <p>　　10.提高客户满意度</p>
  <p>　　四、认证咨询流程</p>
  <p>　　第一步：咨询老师初访，对公司有个大概的了解，对公司作出分析与策划。</p>
  <p>　　第二步：让员工了解标准内容和20000的可行性，对公司负责人及相关人员进行标准培训。</p>
  <p>　　第三步: 咨询老师针对性的指导工作组，对企业的突发事件进行管理，寻求一个统一的解决方案，有效屏蔽突发事件，并对企业的服务级别的管理和服务提供更好的指导方向和建议。</p>
  <p>　　第四步：体系正式运行，公司上下全动员进行系统的运行。内部开展一次试验性的审核，然后管理评审，进行改进。</p>
  <p>　　第五步：提交申请，进行正式审核，审核员对不符合项提出意见进行整改，并在咨询老师协助下，企业顺利通过整改关闭，取证及后续的持续改进和努力。</p>
  <p>　　五、认证所需资料</p>
  <p>　　1.法律地位证明文件(如企业法人营业执照、事业单位法人代码证书、社团法人登记证等)，组织机构代码证书;</p>
  <p>　　2.有效的资质证明、产品生产许可证强制性产品认证证书等(需要时)</p>
  <p>　　3.组织简介(产品及与产品/服务有关的技术标准、强制性标准、使用设备、人员情况等)</p>
  <p>　　4.申请认证产品的生产、加工或服务工艺流程图;</p>
  <p>　　5.服务场所、多场所需提供清单;</p>
  <p>　　6.管理手册、程序文件及组织机构图;</p>
  <p>　　7.服务器数量以及终端数量;</p>
  <p>　　8.服务计划、服务报告、容量计划</p>`, img: defaultimg},
  { title: "ISO22000", content: `　　<p>一、ISO22000食品卫生安全管理体系是什么</p>
  <p>　　HACCP体系是国际上共同认可和接受的食品安全保证体系，主要是对食品中微生物、化学和物理危害进行安全控制。联合国粮农组织和世界卫生组织上世纪80年代后期开始大力推荐这一食品安全管理体系。</p>
  <p>　　二、食品卫生安全体系认证材料</p>
  <p>　　它是一套确保食品安全的管理系统，这种管理系统一般由下列各部分组成：</p>
  <p>　　1、对从原料采购&rarr;产品加工&rarr;消费各个环节可能出现的危害进行分析和评估。</p>
  <p>　　2、根据这些分析和评估来设立某一食品从原料直至最终消费这一全过程的关键控制点(CCPS)。</p>
  <p>　　3、建立起能有效监测关键控制点的程序。</p>
  <p>　　三、食品卫生安全体系认证意义</p>
  <p>　　1、可以与贸易伙伴进行有组织的、有针对性的沟通;</p>
  <p>　　2、在组织内部及食品链中实现资源利用最优化;</p>
  <p>　　3、改善文献资源管理;</p>
  <p>　　4、 加强计划性，减少过程后的检验;</p>
  <p>　　5、 更加有效和动态的进行食品安全风险控制;</p>
  <p>　　6、&nbsp;所有的控制措施都将进行风险分析;</p>
  <p>　　7、对必备方案进行系统化管理;</p>
  <p>　　8、由于关注最终结果，该标准适用范围广泛;</p>
  <p>　　9、 可以作为决策的有效依据;</p>
  <p>　　10、 通过减少冗余的系统审计而节约资源。</p>`, img: defaultimg},
  { title: "IATF16949", content: `<p>ISO/TS 16949标准源于汽车整车厂的要求，所以，并不是所有的组织都可以申请ISO/TS16949的认证注册。IATF16949：2016认证注册，只适用于汽车整车厂，汽车生产件及其服务件制造现场。这些制造现场生产的产品必须最终是用于整车制造，具有加工制造能力，并通过这种能力的实现使产品能够增值。这里的制造包括了：</p>
  <p>(1)生产材料；</p>
  <p>(2)生产或服务件；</p>
  <p>(3)装配；</p>
  <p>(4)热处理、焊接、喷漆、电镀或其他表面处理等。</p>
  <p>为了对IATF16949：2016的实施提出了要求，IATF&nbsp;颁布了&ldquo;ISO/TS 16949：2009汽车行业认证方案-获得IATF认可的规则&rdquo;，它包括对认证机构的认可、认证机构的审核过程、认证机构的审核员资格和证书的准则，用于约束被IATF认可的IATF16949：2016认证机构。了解其中关于认证机构的审核过程的一些要求，对于想要申请认证并顺利通过认证的组织有很大的帮助。</p>
  <p>1、&ldquo;IATF认可规则&rdquo;规定，要求获得IATF16949：2016认证注册的公司，必须在第一阶段审核中具有:</p>
  <p>（1）体现过程顺序和其相互作用的过程描述，至少最近12个月的关键指标和绩效趋势；</p>
  <p>（2）组织过程满足IATF16949：2016所有要求的证据；</p>
  <p>（3）质量手册；</p>
  <p>（4）汽车客户及其适用时客户特殊要求清单；</p>
  <p>（5）最近12个月内部审核和管理评审的策划及其结果；</p>
  <p>（6）合格的内部审核员名单</p>
  <p>（7）提供客户抱怨汇总，应对，计分卡和是否被客户处于暂停状态。</p>
  <p>2、审核组评审了组织基于上述要求所提供的证据，认为证据能满足要求并没发现可能会导致第二阶段审核严重不符合项，就可得出第一阶段&ldquo;准备就绪&rdquo;的结论，组织可进行第二阶段审核日期确定。</p>
  <p>3、反之，第一阶段审核结论为&ldquo;未准备就绪&rdquo;。组织如想继续进行IATF16949认证，就必须重新从第一阶段开始。</p>
  <p>4、第二阶段审核的目的就是基于过程方法来评估组织的质量管理体系是否有效运行，包括满足IATF16949：2016标准要求和客户特殊要求。</p>
  <p>5、对于一个新设立的加工场所，如没有12个月的记录，也可进行评审。经评审符合质量体系规范要求的，认证公司可签发有效期最长为12个月的符合性证明。当具备了12个月的记录后，由同一家认证机构履行包括准备评审和初次审核在内的认证过程，审核天数可做适当减免。</p>
  <p>6、对于具备至少12个月质量体系运行记录，但是却无法证明自己在汽车整车制造供应链上的组织，只要能够证明它被列在客户的有效投标清单上，而该客户要求它实施IATF16949：2016认证或具备起符合性。经评审符合质量体系规范要求的，认证公司同样可签发有效期最长为12个月的符合性证明。如果在12个月内没有签发合同，组织可再次申请另一份符合性证明。</p>
  <p>7、对于如何进行现场审核，包括，第一阶段审核，第二阶段审核（第一阶段和第二阶段审核也统称初次审核）监督审核和换证复评审核，IATF16949认证规则制定了一些较细化的要求:</p>
  <p>（1）当标准的任何要求因组织及其产品的特点而不适用时，可以考虑对其进行删减﹐然而，&nbsp;IATF16949：2016标准仅允许在组织没有产品设计和开发责任的情况下删减与8.3条款有关的内容，并且不允许删减制造过程的设计。</p>
  <p>（2）当申请的组织是由多个制造现场组成的集团时，必须审核所有的制造现场，不允许对现场进行抽样审核。</p>
  <p>（3）对于初次审核，外部支持职能必须先于制造现场接受审核，并且只得以支持现场的角色而接受审核，而不能获得独立的IATF16949：2016认证。</p>
  <p>（4）无论是位于现场或外部场所的设计职能，必须在每连续12个月的周期内至少接受一次监督审核。其他的外部场所或支持职能须视其对&ldquo;现场&rdquo;支持的必要性来接受审核，但在初次（或重新认证）审核时必须接受审核，并且在证书的有效期内至少再接受一次审核。</p>
  <p>（5）每次审核必须覆盖所有班次。必须对所有生产班次中所从事的制造活动进行审核。</p>
  <p>8、在认证规则中，有一些非常明确的时间要求，如果不满足这些时间节点要求，那么都将可能导致部分审核或整个审核的失效而不能获得&nbsp;IATF16949：2016认证或维持证书的有效性。</p>
  <p>（1）当组织申请并通过阶段1审核后，阶段2审核必须在阶段1审核批准后的90&nbsp;天内完成，否则必须重新进行阶段1审核。</p>
  <p>（2）必须在阶段2审核结束后的90天内就每个不符合项进行根本原因分析，确定相应的系统纠正措施并尽快实施。只有当100%符合要求或在审核所发现的不符合项已经100%解决后，方可颁发证书。如超过90天而未关闭或100%解决不符合项，则整个审核失效，组织应从第二阶段开始。</p>
  <p>（3）当组织在监督审核被开出严重不符合项时，组织应在20天内向认证机构提交根本原因分析和遏止措施(即纠正)，认证机构对其提交的根本原因和遏止措施进行评审以判定是否需要启动证书暂停程序。</p>
  <p>（4）当获证组织已有12个月不再从事其证书范围上的产品生产或服务时，认证机构将取消其证书。但这种行动不属于制裁。</p>
  <p>（5）至少每12个月必须做一次监督审核。</p>
  <p>（6）当组织不按照规定的时间间隔进行监督审核，即启动认证撤消程序，认证机构在20天内确定是否需要对证书进行暂停，若进入暂停程序则最长期限是120天，之后进人证书撤销阶段。</p>
  <p>（7）换证复评审核日期不能超过初次现场审核结束日期+3年这个时间期限，证书的再次签发日期不能超过现有证书的有效期。</p>
  <p>以上内容即是IATF关于IATF16949的认证要求。</p>`, img: defaultimg},
  { title: "CNAS17025", content: `<p>一、什么是CNAS17025认证？CNAS认证，为中国合格评定国家认可委员会(ChinaNationalAccreditationServiceforConformityAssessment，CNAS)的认证英文缩写，是在原中国认证机构国家认可委员会（CNAB）和中国实验室国家认可委员会(CNAL)基础上合并重组而成的。</p>
  <p>二、CNAS与17025的区别：</p>
  <p>2.1定义不同：ISO17025是实验室认可服务的国际标准，全称是ISO/IEC17025:2005-5-15《检测和校准实验室能力的通用要求》；CNAS是中国合格评定国家认可委员会，是根据《中华人民共和国认证认可条例》的规定，由国家认证认可监督管理委员会批准设立并授权的国家认可机构。</p>
  <p>2.2作用不同：ISO17025：（1）表明实验室具备了按有关国际准则开展校准/检测的技术能力；（2）增强实验室在校准/检测市场的竞争能力，赢得政府部门和社会各界的信任；（3）参与国际实验室认可双边、多边合作，得到更广泛的承认。CNAS：（1）按照我国有关法律法规、国际和国家标准、规范等，建立并运行合格评定机构国家认可体系，制定并发布认可工作的规则、准则、指南等规范性文件；（2）对境内外提出申请的合格评定机构开展能力评价，作出认可决定，并对获得认可的合格评定机构进行认可监督管理；2（3）负责对认可委员会徽标和认可标识的使用进行指导和监督管理；（4）组织开展与认可相关的人员培训工作，对评审人员进行资格评定和聘用管理。</p>
  <p>2.3认可机构不同：ISO17025：中国实验室国家认可委员会是我国唯一的实验室认可机构，承担全国所有实验室的ISO17025标准认可；中国认证机构国家认可委员会（CNAS）是经中国国家认证认可监督管理委员会依法授权设立的国家认可机构，负责对从事各类管理体系认证和产品认证的认证机构进行认证能力的资格认可。</p>
  <p>三、实验室CNAS认可条件一览表:项目具体条件注意事项基本资料营业执照营业执照日期不要过期，是否参加年审实验室在所属企业的地位结构图实验室内部组织机构图实验室平面图实验室污水道管图如果有进行化学试验实验室建筑物合规性文件如：消防验收、建设工程竣工验收等人员要求具有实验室技术负责人其任职资格依据申请认可检测项目的要求进行确定具有实验室质量负责人其任职资格依据申请认可检测项目的要求进行确定具有实验室监督员其任职资格依据申请认可检测项目的要求进行确定具有实验室试验员其任职资格依据申请认可检测项目的要求进行确定具有授权签字人（至少两名）该人员可以由技术负责人或质量负责人进行兼职，其任职资格依据申请认可检测项目的要求进行确定。具有实验室样品管理员或文员等该人员可以由实验室内部的相关人员兼职具有内审员该人员可以由实验室内部的相关人员兼职，并颁发有华菱企管的培训资质证技术要求应列出所有申请认可检测项目的清单认可项目要与CNAS的检验项目领域代码相对应列出所有认可检测项目的试验方法最好是依据相应的国家标准、国际标准等，如GB，ISO，IEC、EN、ASTM等标准。如果采用企业标准需经CNAS专家进行评审认可所有的检测项目的试验方法应到当地的质监局进行标准查新目的是确认标准为最新版本，没有过期3仪器要求根据贵公司申请的认可业务范围，具备有检测能力的仪器，仪器的精度应能满足要求。仪器应有定期校验合格证书，且能进行有效的溯源硬件要求具备恒温恒湿的调节装置和监测仪器要根据测试标准中的规定和仪器的使用说明中规定进行防爆开关和防爆灯针对具有易燃易爆化学品的实验室烟雾报警器针对具有易易燃易爆化学品的实验室可燃性气体、二氧化碳泄漏及其它相关危害实验室人员的报警器针对有化学品的实验室洗眼及紧急喷淋装置针对有危学品的实验室灭火器根据消防法规的要求实施排风系统确保实验过程中有毒有害气体的排放废气排放的有组织排放装置根据实验室的活动决定实验人员的防护用品，如防护眼镜、面具、呼吸器等根据实验室的活动决定配备标准和数量设立样品的储存场所，如独立样品间等注意场所的空间，根据样品保留时间决定信息网络系统的建立便于实验室数据库的管理，如报告的查询、样品的接受等实验室应急安全出口设立根据消防法规的要求实施设立实验室工作人员的办公场所试验设备的独立物理区域（必要时）</p>`, img: defaultimg},
  { title: "AS9100", content: `<p>AS9100航空航天质量体系认证</p>
  <p>虽然不同项目、领域中的质量管理都会遵循相同的质量原则，但是在不同行业之间，应用这些原则的方式可能会多种多样。每个行业都会有其自身的优先级、业务要求，因此不同行业都必须有其独特的方式或规定来应用质量原则。</p>
  <p>对于航空制造业来说，各种飞行器是该行业的输出产品，尤其是对于民航客机来说，每天在全球范围内要运送超过数百万的乘客，这就意味着客机在设计、生产、运行和维修等各个阶段都必须植入质量控制的理念。</p>
  <p>也许没有其它行业会像航空制造业一样具有非常强烈的安全意识，而且对于错误或误差几乎是零容忍。有人说航空制造业的&ldquo;门槛&rdquo;非常高，而这恰恰代表了严格的高质量标准。</p>
  <p>由IAQG(International Aerospace Quality Group)制定的AS9100系列质量体系，如今已成为航空制造业的通用质量标准。 无论是在北美被称为AS9100，还是在欧洲被叫做EN9100,它都适用于整个航空供应链体系，包括设计、制造、更换和维护。百度百科上对AS9100的定义是：</p>
  <p>AS9100 是一份在ISO9001质量体系要求基础上开发的航空航天标准，其中加入了航空航天行业所建立的有关质量体系的附件要求，以满足DOD, NASA以及FAA等监管机构的质量要求。此标准旨在为航空航天行业建立统一的质量管理体系要求。</p>
  <p>说到这个质量体系，有时候我们会经常被AS9100、AS9110、AS9120等搞晕，微小的数字差异，代表的是不同的规范标准和应用领域，那么这三个标准有啥区别呢？</p>
  <p>&nbsp;</p>
  <p>它们的不同之处在于适用的组织类型：</p>
  <p>&nbsp;</p>
  <p>AS9100: 针对航空、航天和国防领域的，涉及设计和生产的质量管理要求；</p>
  <p>AS9110: 针对军用、商业以及私人飞机的，涉及维修的质量管理要求；</p>
  <p>AS9120: 主要针对经销商、供应商的质量管理要求，包括库存管理、产品可追溯性等要求。</p>
  <p>&nbsp;</p>
  <p>整个航空制造业供应链中，对于供应商的管理仍然是最具挑战的任务之一。因为这个供应链非常之长，所以会包括很多跨行业的供应商，而且还涉及到供应商对其自身下一级供应商的管理。其次，供应商必须使用客户批准的来源，包括生产使用的原材料、模具、工艺等级要求等。</p>
  <p>由此可见，对于供应商的批准和管理工作是重中之重，只有符合质量标准的零件才可以被用来组装飞机，那么提到对零件的质量鉴定工作，就不得不说首件鉴定。无论是在航空制造业，还是在汽车工业、医疗领域，都离不开首件鉴定要求。</p>
  <p>&nbsp;</p>
  <p>首件鉴定测试的不是试验预制的产品，因为它不符合大批量生产的工艺要求；而且也不一定是第一件被大批量制造出来的产品，往往是在首次大批量制造过程中，从成品中随机抽测的。对于首次大批量制造来说，要验证生产的各个环节是否符合产品标准或者说客户的质量要求，这包含对原材料、生产过程甚至生产线工人的审核。</p>
  <p>&nbsp;</p>
  <p>为什么要进行首件鉴定呢？</p>
  <p>验证产品生产过程是否能够制造出符合工程和设计要求的零件，这包括：</p>
  <p>&nbsp;</p>
  <p>验证使用了客户或标准指定的材料；</p>
  <p>验证制造过程是否遵循规范中详述的工艺、加工方法；</p>
  <p>验证制造或加工的零件在规范要求的公差范围内</p>
  <p>那么在什么情况下要进行首件鉴定呢？</p>
  <p>新研发产品的首次生产；</p>
  <p>产品设计变更；</p>
  <p>原材料供应商变更；</p>
  <p>某产品生产间隔超过两年；</p>
  <p>工艺或模具变更；</p>
  <p>产线变更。</p>
  <p>在航空制造工业中，AS9102标准化了该行业供应商必须提供的文档，以满足首件鉴定的要求。AS9102规范可以简单的理解是为了客观证明生产或加工的零件是否满足所有的工程设计要求。</p>
  <p>目前，很多航空制造商都要求其供应商进行AS9100注册。AS9100的实施可以向客户证明公司拥有良好的质量管理体系，换句话说就是向客户证明公司可以更好地满足客户的需求。</p>`, img: defaultimg},
  { title: "GJB9001C", content: `<p>GJB9001C武器装备质量体系认证</p>
  <p><strong>申请GJB9001C-2017认证的组织可以是从事武器装备论证、研制、生产、试验和维修单位。武器装备是指实施和保障军事行动的武器、武器系统和军事技术器材，以及用于武器装备的计算机产品等（产品和服务属于武器装备总体、关键、重要分系统和核心配套产品，即列入国防科工局、发布的武器装备科研生产许可目录内的专业产品）需要进行强制性武器装备质量体系认证，许可目录之外的专用装备和一般配套性产品、军选民用产品不需要强制性武器装备质量体系认证。</strong></p>
  <p><strong>初次认证申请的组织，《申请书》需请军方用户签署认证推荐意见并盖章确认，同时填写《产品所在阶段情况调查表》。如该申请组织是部队，可由上级主管部门签字、盖章。对地方企业申请时，需有相关军代表出具《推荐意见书》，其内容包括：企业人员、技术、设备情况；产品质量状况；对配套企业，要注明产品与装备的关系(用在什么地方)；说明申请认证产品与推荐单位的关系。</strong></p>
  <p>&nbsp;</p>
  <p><strong>申请认证前须按GJB9001C-2017标准建立管理体系，运行3个月以上（实际要求达到6个月以上），完成内审和管理评审。运行期间有订货及交付发生，且现场审核时应有军品生产。</strong></p>
  <p><strong>申请条件：</strong></p>
  <p>1、境内注册的企业法人或事业法人；</p>
  <p>2、已承担武器装备科研生产的项目，并已进行了交付；</p>
  <p>3、有固定的科研生产和办公场所，符合研制和生产要求，（一般3年以上租赁合同）；</p>
  <p>4、未发生重大质量事故以及其他严重违法行为。</p>
  <p><strong>受理单位：</strong></p>
  <p>根据文件规定，由北京军友诚信质量认证有限公司（隶属国家国防科技工业局协作配套中心）和兴原认证中心有限公司（原核工业部投资成立）审查。</p>
  <p>审查参考标准：</p>
  <p>GJB9001C-2017国军标质量体系要求</p>
  <p>GJB150等相关国军标质量管理标准。</p>
  <p><strong>申请等级：</strong></p>
  <p>无</p>
  <p><strong>证书有效期：</strong></p>
  <p>三年</p>
  <p><strong>审查方式：</strong></p>
  <p>付费审查、监审</p>
  <p>来公司现场审查，初审一般会进行两次审查，即一阶段和二阶段，2-4个专家（根据申请范围、专业匹配），现场评价方式，会开具不符合项，提交整改报告和证明材料。</p>`, img: defaultimg},
  { title: "ISO26262", content: "", img: defaultimg},
  { title: "军工保密认证", content: `<p>军工保密认证</p>
  <p>第一部份 申请军工保密资质认证的必要性</p>
  <p>1、 军工保密资格认证是国家对武器装备科研生产单位的保密基本条件的评价和认可，是国家批准的一项涉密行政审批工作，是企事业单位承担涉密武器装备科研生产任务的必要条件。</p>
  <p>2、2001年9月14日中共中央办公厅转发的《中共中央保密委员会关于加强国防科技工业保密管理工作的意见》明确提出了加强国防科技工业保密工作的措施，并决定在武器装备科研生产单位实行保密资格认证制度，规定承担武器装备科研生产任务的单位必须通过保密资格审查，未通过保密资格审查认证的单位不得承担武器装备科研生产和协作配套任务。同时要求军队系统装备部门的武器装备科研生产合同项目，必须在列入《武器装备科研生产单位保密资格名录》中选择具有相应等级保密资格的单位招标和签订合同。</p>
  <p>3、军工保密资格认证，由地方保密局、地方国防科工办有关部门人员组成国防武器装备科研生产单位保密资格审查认证委员会，负责审查认证工作。</p>
  <p>&nbsp;</p>
  <p>第二部份 申请企业基本条件</p>
  <p>1、在中华人民共和国境内依法成立3年以上的法人，无违法犯罪记录；</p>
  <p>2、承担或拟承担武器装备科研生产的项目或产品涉及国家秘密；</p>
  <p>3、无境外（含港澳台）控股或直接投资，且通过间接方式投资的外方投资者及其一致行动人的出资比例最终不得超过20%；</p>
  <p>4、法定代表人、主要负责人、实际控股人、董（监）事会人员、高级管理人员以及承担或者拟承担涉密武器装备科研生产任务的人员，具有中华人民共和国国籍，无境外永久居留权 或者长期居留许可，与境外（含港澳台）人员无婚姻关系；</p>
  <p>5、有固定的科研生产和办公场所，具有承担涉密武器装备科研生产任务的能力；</p>
  <p>6、保密制度完善，有专门的机构或者人员负责保密工作，场所、设施、设备防护符合国家保密规定和标准；</p>
  <p>7、一年内未发生泄密事件；</p>
  <p>8、法律、行政法规和国家保密行政管理部门规定的其他条件。</p>
  <p>注：上市公司申请保密资格的，除符合以上申请条件外，还应符合以下条件：</p>
  <p>1、近3年内未受到证券监管机构的行政处罚；</p>
  <p>2、内部控制和信息披露制度完善；</p>
  <p>3、实际控制人承诺在申请期间及保密资格有效期内保持控制地位不变。</p>
  <p>&nbsp;</p>
  <p>第三部份 申请材料</p>
  <p>1、武器装备科研生产单位保密资格申请书（简称申请书，申请书及相关材料不得涉及国家秘密）；</p>
  <p>2、工商营业执照或者事业单位法人证书正本（复印件）；</p>
  <p>3、在登记机关备案的章程；</p>
  <p>4、上一年度财务审计报告（上市公司最近一次的年度报告）；</p>
  <p>5、科研生产场所产权证书或者租赁合同（复印件）一般要求合同的租赁期在3年（含）以上；</p>
  <p>6、军队资格审查申请受理点、军工集团公司、项目总承包单位或者法律法规规定的有关部门出具的保密资格认定等级建议表；</p>
  <p>7、国家保密行政管理部门要求提供的其他材料。</p>
  <p>&nbsp;</p>
  <p>第四部份 申请流程</p>
  <p>1、申请单位填写《申请书》后，同准备的其他的条件一起提交到上级主管部门或所在地的省（区、市）国防科技工业管理部门或地市级以上保密行政管理部门。</p>
  <p>2、经审核同意后，方可向有关审查认证机构提出正式申请。</p>
  <p>2.1、须经其上级主管部门审核的主要是指教育部、工业和信息化部、中国科学院、军工集团公司所属企事业单位。</p>
  <p>2.2、其他企事业单位，报所在地省（区、市）国防科技工业管理部门或所在地的地市级以上保密行政管理部门审核。</p>
  <p>3、审核。包括三方面内容：</p>
  <p>3.1、《申请书》的填写是否符合《办法》规定,填写内容是否属实；</p>
  <p>3.2、申请单位是否符合《办法》规定的基本条件，申请材料是否符合有关规定；</p>
  <p>3.3、申请的保密资格等级是否以承担的科研生产项目或产品涉及的最高密级为准；</p>
  <p>4、审核部门经审核后，对是否同意申请提出审核意见，加盖印章，并退送申请单位；</p>
  <p>5、申请单位将审核同意的《申请书》直接报送到有关军工保密资格认证委，正式提出申请。其中，申请一级保密资格的单位直接将《申请书》报送到国家军工保密资格认证委，申请 二级、三级保密资格的单位直接将《申请书》报送到所在地省（区、市）军工保密资格认证委；</p>
  <p>6、受理机构收到申请单位《申请书》及相关材料后，首先对申请材料是否完备，是否符合规定的申请条件进行审查，在5个工作日内作出是否受理的决定；</p>
  <p>6.1、受理机构作出受理、不予受理的决定或者要求补正材料的，应当出具书面凭证并加盖专用公章；</p>
  <p>6.2、对决定受理的单位，受理机构应当在5个工作日内对申请材料的真实性进行书面审查，通过书面审查的，保密行政管理部门会同共同审批部门，在25个工作日内组成现场审查组进 行现场审查；</p>
  <p>7、现场审核后，现场审查组组长向申请单位通报审查意见和结论；</p>
  <p>7.1、审核不通过，申请单位按照审核意见进行整改。</p>
  <p>7.2、审核通过，等待发证。</p>
  <p>8、取得保密资格证书，并将有关审查材料报国家保密局、国家国防科技工业局和中央军委装备发展部备案，列入名录定期发布。</p>
  <p>注：未通过现场审查的单位，6个月内不受理再次申请。现场审查中止的，3个月不重新进行现场审查</p>`, img: defaultimg},
];
