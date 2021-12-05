import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu,Divider } from 'antd';
import { getChildrenToRender } from './utils';
import { NavLink, withRouter } from "react-router-dom";

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
      background:'rgba(0, 19, 34, 0)',
      mtop:40
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  handler = function () {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop < 200) {
      this.setState({
        background: 'rgba(0, 19, 34, 0)',
        mtop:40
        
      });
    } else {
      this.setState({
        background: 'radial-gradient(circle, #353943, #2b303b)',
        mtop:0
      });
    }
  };

  componentDidMount() {
    this.regScroll(this.handler.bind(this));
  }


  componentWillUnmount() {
    window.onscroll = '';
  }
  //添加事件监听
  regScroll = (myHandler) => {
    if (window.onscroll === null) {
      window.onscroll = myHandler
    } else if (typeof window.onscroll === 'function') {
      var oldHandler = window.onscroll;
      window.onscroll = function () {
        myHandler();
        oldHandler();
      }
    }
  }

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div
                {...a}
                className={`header0-item-block ${a.className}`.trim()}
              >
               
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header0-item-child"
          >
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <NavLink  {...a} to={a.href} className={`header0-item-block ${a.className}`.trim()}>
          <Divider type="vertical" />

            {a.children.map(getChildrenToRender)}
            <Divider type="vertical" />
          </NavLink>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        style={{ background: this.state.background,top:this.state.mtop }}
        animation={{ opacity: 1, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['sub0']}
              theme="dark"
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default withRouter(Header);
