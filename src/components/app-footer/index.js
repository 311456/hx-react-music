import React, { Fragment, memo } from 'react'

import { FooterWrapper, FooterLeft, FooterRight } from "./style"
import { footerLinks, footerImages } from "@/common/nav-data"


const HXAppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className='wrap-v2 content'>
        <FooterLeft className='left'>
          <div className='link'>
            {footerLinks.map(item => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel='noreferrer'>{item.title}</a>
                  <span className='line'>|</span>
                </Fragment>
              )
            })}
          </div>
          <div className="copyright">
            <span>网易公司版权所有©1997-2022</span>
            <span>
              杭州乐读科技有限公司运营：
              <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png" rel="noopener noreferrer" target="_blank">浙网文[2021]1186-054号</a>
            </span>
          </div>
          <div className="info">
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
            粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
            </a>
          </div>
        </FooterLeft>
        <FooterRight className='right'>
          {footerImages.map((item) => {
            return (
              <li className='item' key={item.link}>
                <a className='link' href={item.link} rel="noreferrer" target="_blank"> </a>
                <span className='title'></span>
              </li>
            )
          })}
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})

export default HXAppFooter