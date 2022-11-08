import React from 'react'
import Post from "./Post";
import {connect} from "react-redux";

const Posts = ({syncPosts}) => {
    if(!syncPosts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return syncPosts.map(post => <Post key={post.id} post={post}/>)
}

const mapStateToProps = state => ({
    syncPosts: state.posts.posts
})

export default connect(mapStateToProps, null)(Posts)