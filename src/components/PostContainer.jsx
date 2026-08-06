import { useEffect } from "react"
import CreatePost from "./CreatePost"
import usePostStore from "@/stores/postStore"
import PostItem from "./PostItem"

function PostContainer() {
  const getAllPosts = usePostStore(state => state.getAllPosts)
  const posts = usePostStore(state => state.posts)
  useEffect(() => {
    getAllPosts()
  }, [])
  return (
    <div className="w-170 mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-info">
      <CreatePost />
      <PostItem />
      <PostItem />
      <PostItem />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}

export default PostContainer
