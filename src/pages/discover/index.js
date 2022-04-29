import React, { memo, useEffect } from 'react'
import { discoverMenu } from "@/common/nav-data"
import { DiscoverWrapper, TopMenu } from './style'
import { NavLink, Outlet } from 'react-router-dom'

const HXDiscover = memo(() => {
  useEffect(() => {
  })
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {discoverMenu.map((item) => {
            return (
              <div className='item' key={item.title}>
                <NavLink to={item.link} >{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      {/* 占位组件 */}
      <Outlet />
    </DiscoverWrapper>
  )
})

export default HXDiscover