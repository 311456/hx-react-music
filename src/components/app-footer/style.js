import styled from "styled-components"

export const FooterWrapper = styled.div`
  height: 172px;
  color: #333;
  border-top: 1px solid #d3d3d3;
  background-color: #f2f2f2;
  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;
  .link{
    a{
      color: #999;
    }
    .line{
      margin: 0 4px;
      color: #999;
      /* 没有创建新元素，则是伪类选择器 */
      :last-child{
        display: none;
      }
    }
  }

  .copyright{
    span{
      margin-right: 14px;
    }
  }

`

export const FooterRight = styled.ul`
  display: flex;
  margin-top: 30px;
  margin-right: -40px;
  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    .link{
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${require("@/assets/img/sprite_footer_02.png")});
      background-size: 110px 552px;
    }
    :nth-child(1) .link{
      background-position: -60px -456.5px;
    }
    :nth-child(2) .link{
      background-position: -61px -101px;
    }
    :nth-child(3) .link{
      background-position: 0 0;
    }
    :nth-child(4) .link{
      background-position: -61px -50px;
    }
    :nth-child(5) .link{
      background-position: -1px -101px;
    }

    .title{
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 14px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png")});
      background-size: 180px 139px;
    }
    :nth-child(1) .title{
      width: 72px;
      background-position: 0 -108px;
    }
    :nth-child(2) .title{
      background-position: 1px -91px;
    }
    :nth-child(3) .title{
      background-position: -1px 0;
    }
    :nth-child(4) .title{
      background-position: 1px -54px;
    }
    :nth-child(5) .title{
      background-position: -1px -72px;
    }
  }
`
