const PostList = ({cases, params}) => {

    return (
        <div className="post-list">
            {cases.map((post) => (
                <div className="blog">
                    <div className="case-preview" key={post.id}>
                        <h2>{post.title}</h2>
                        <div className="case-card" key={post.id}>
                            <p>{post.body}</p>
                        </div>

                    </div>
                </div>
            )
            )}
        </div>
    );
}

export default PostList;