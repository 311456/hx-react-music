import { useRoutes } from "react-router-dom"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import HXDiscover from "../pages/discover"
import DiscoverRecommend from "../pages/discover/c-pages/recommend"
import DiscoverTopList from "../pages/discover/c-pages/top-list"
import DiscoverPlayList from "../pages/discover/c-pages/play-list"
import DiscoverDjRadio from "../pages/discover/c-pages/djradio"
import DiscoverArtist from "../pages/discover/c-pages/artist"
import DiscoverAlbum from "../pages/discover/c-pages/album"
import HXMine from "../pages/mine"
import HXFriend from "../pages/friend"
import { Empty } from "antd"

export default function useRouter() {
  const routerElement = useRoutes([
    { path: "/", element: <HXDiscover /> },
    {
      path: "/discover/", element: <HXDiscover />,
      children: [
        // 设置默认选项
        { index: true, element: <DiscoverRecommend /> },
        { path: "recommend", element: <DiscoverRecommend /> },
        { path: "toplist", element: <DiscoverTopList /> },
        { path: "playlist", element: <DiscoverPlayList /> },
        { path: "djradio", element: <DiscoverDjRadio /> },
        { path: "artist", element: <DiscoverArtist /> },
        { path: "album", element: <DiscoverAlbum /> },
      ]
    },
    { path: "/mine", element: <HXMine /> },
    { path: "/friend", element: <HXFriend /> },
    { path: "*", element: <Empty description="请输入正确的访问路径哦~" /> }
  ])
  //! 路由重定向，暂时就用这个方法解决吧
  let nav = useNavigate()
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/" || path === "/discover") {
      nav("/discover/recommend")
    }
  })
  return routerElement
} 