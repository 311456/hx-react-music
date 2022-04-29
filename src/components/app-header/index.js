import React, { memo } from 'react'
import { NavLink } from "react-router-dom"
import { Input } from 'antd'
import { SearchOutlined } from "@ant-design/icons"

import { headerLink } from '../../common/nav-data'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

const HXAppHeader = memo(() => {
  // 顶部导航栏
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>{item.title}
          {/* 激活状态的小三角 */}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          {/* 锚点 */}
          <a href='#/' className='logo sprite_01'>网易云音乐</a>
          <div className='select-list'>
            {headerLink.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
          <div className="center">创造者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      {/* 分割线 */}
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default HXAppHeader