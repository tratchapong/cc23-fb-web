import TimeAgo from "react-timeago"
import { CloseIcon, CommentIcon, LikeIcon, ShareIcon, ThreeDotIcon } from "../icons"
import Avatar from "./Avatar"
import usePostStore from "@/stores/postStore"
import { toast } from "react-toastify"
import useUserStore from "@/stores/userStore"

function PostItem(props) {
	const deletePost = usePostStore(state => state.deletePost)
	const user = useUserStore(state => state.user)
	const {post} = props
	const { id, message, image, createdAt, user : userInPost, comments, likes } = props.post
	const haveLike = post.likes.some(el => el.userId === user.id)

	const hdlLikeClick = async () => {
		if (haveLike) {
			await unLike(id)
		} else {
			await createLike(id)
		}
	}

	const hdlDelete = async () => {
		try {
			const resp = await deletePost(id)
		} catch (err) {
			toast.error(err.response?.data.error || err.message)
		}

	}
	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="card-body p-3">
				<div className="flex justify-between">
					<div className="flex gap-3">
						<Avatar className='w-11 h-11 rounded-full' imgSrc={userInPost.profileImage} />
						<div className="flex flex-col">
							<p className='font-bold text-sm'>{userInPost.firstName} {userInPost.lastName}</p>
							<p className='text-xs opacity-70'>
								<TimeAgo date={createdAt} />
							</p>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="dropdown">
							<div tabIndex={0} role='button'>
								<div className="avatar items-center cursor-pointer">
									<div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
										<ThreeDotIcon className='w-6' />
									</div>
								</div>
							</div>
							<ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>
								<li ><a>Edit</a></li>
								<li onClick={hdlDelete}><a>Delete</a></li>
							</ul>
						</div>
						<div className="avatar items-center cursor-pointer">
							<div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
								<CloseIcon className='w-6' />
							</div>
						</div>
					</div>
				</div>
				<p>{message}</p>
				{image && (
					<img src={image} alt="post image"
						className='p-4 max-h-[200px] object-contain'
					/>
				)}

				{/* like , comment */}
				<div className="flex justify-between items-center pe-4">
					<div className="avatar items-end cursor-pointer gap-1">
						<div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-200">
							<LikeIcon className='w-5' />
						</div>
						<p>{likes.length} likes</p>
					</div>
					<div className="flex ">
						<p className='opacity-60'>{comments.length} comments</p>
					</div>
				</div>
				<div className="divider h-0 my-0"></div>
				<div className="flex gap-3 justify-between">
					<div className={`flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1
           ${Math.random() > 0.5 ? 'bg-blue-300 text-white' : ''} `} >
						<LikeIcon className='w-6' /> Like
					</div>
					<div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
						<CommentIcon className='w-8' /> Comment
					</div>
					<div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
						<ShareIcon className='w-6' /> Share
					</div>
				</div>
				<div className="divider h-0 my-0"></div>
				{/* <CommentContainer postId={post.id} comments={post.comments} /> */}
			</div>
		</div>
	)
}

export default PostItem
