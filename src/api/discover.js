import request from "@/api/request"

export function getAlbumNewest(params) {
  return request({
    url: "/album/newest",
    methods: "get",
    params
  })
}