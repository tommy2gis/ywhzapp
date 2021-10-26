import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        href: '/',
        children: {
          href: '/',
          children: [{ children: '首页', name: 'text',link:'/' }],
        }
      },
      {
        name: 'item1',
        className: 'header0-item',
        href: '/',
        children: {
          href: '/business',
          children: [{ children: '业务范围', name: 'text',link:'/' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        href: '/',
        children: {
          href: '/guest',
          children: [{ children: '客户案例', name: 'text',link:'/' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        href: '/',
        children: {
          href: '/news',
          children: [{ children: '新闻中心', name: 'text',link:'/' }],
        },
      },
      {
        name: 'item4',
        className: 'header0-item',
        href: '/',
        children: {
          href: '/contact',
          children: [{ children: '联系我们', name: 'text',link:'/' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          children:
            '质量管理辅导服务商',
        }
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg2' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: {
    className: 'home-page-wrapper content0-wrapper kurtog09z5b-editor_css',
  },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  childWrapper: {
    className: 'content0-block-wrapper'
  },
};
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        className: 'title-image',
      }
    ],
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '企业资源管理' },
  content: {
    className: 'content1-content',
    children:
      '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1 kurtj4cscqh-editor_css', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        COPYRIGHT    2021  运帷汇质 版权归本公司所有，未经授权，任何公司或个人均不允许复制、抄袭！
        苏ICP备 00000000号-1
      </span>
    ),
  },
};
