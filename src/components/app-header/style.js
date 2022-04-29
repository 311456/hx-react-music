import styled from "styled-components"

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;

    .content{
      height: 70px;
      display: flex;
      justify-content: space-between;
    }

    .divider{
      height: 5px;
      background-color: #C20C0C;
    }
`
export const HeaderLeft = styled.div`
  display: flex;

    .logo{
      display: block;
      width: 176px;
      height: 69px;
      background-position: 0 0;
      text-indent: -9999px;
    }

    .select-list{
      display: flex;
      line-height: 70px;

      .select-item{
        position: relative;
        a{
          display: block;
          padding: 0 20px;
          color: #ccc;
        }
        /* hot 的样式 */
        :last-of-type a{
          position: relative;
          ::after{
            position: absolute;
            content: "";
            top: 21px;
            left: 100px;
            width: 28px;
            height: 19px;
            background-image:url(${require("@/assets/img/sprite_01.png")});
            background-position: -190px 0;
          }
        }
        /* 悬浮时的 a 以及激活的 a 的样式 */
        :hover a,a.active{
          color: #fff;
          background-color: #000;
          text-decoration: none;
        }
        /* 激活的元素显示小三角 */
        .active .icon{
          position: absolute;
          display: inline-block;
          width: 12px;
          height: 7px;
          top: 64px;
          left: 50%;
          /* 小三角居中一 */
          /* transform: translate(-50%,0); */
          /* 小三角居中二 */
          margin-left: -6px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          
          background-position: -226px 0;
        }
      }
    }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search{
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input{
      ::placeholder{
        font-size: 12px;
        color: #9b9b9b;
      }
    }
  }
  .center{
    width:90px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #4F4F4F;
    border-radius: 20px;
    margin: 0 16px;
    text-align: center;
  }
`
