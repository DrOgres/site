/**
 * 
 * @param {*} param0 
 * @returns 
 */

const Post = ({cases, params, handleDelete}) => {

    return (
        <div className="post-list auto-center">
            {cases.map((post) => (
                <div className="blog ">
                    <div className="case-preview" key={post.id}>
                        <h2>{post.title}</h2>
                        <div className="case-card" key={post.id}>
                            <p>{post.body}</p>
                        </div>

                    </div>
                    <button onClick={()=> handleDelete(post.id)}>Delete Post</button>
                </div>
            )
            )}
        </div>
    );
}

export default Post;