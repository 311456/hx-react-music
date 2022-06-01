import request from "@/api/request"

export function getAlbumNewest(params) {
  return request({
    url: "/album/newest",
    methods: "get",
    params
  })
}

/**
 * 获取轮播图的数据
 * @returns banners
 */
export function getBanners() {
  return request({
    url: "/banner",
    methods: "get"
  })
}

/**
 * 获取热门推荐的数据
 * @param {number} limit 
 * @returns hotMenu
 */
export function getHotMenu(limit = 30) {
  return request({
    url: "/personalized",
    methods: "get",
    params: { limit }
  })
}

