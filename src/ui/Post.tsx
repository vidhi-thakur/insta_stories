import './Post.css';

function Post() {
    return (
        <div className="post">
            <section className='header'>
                <div className='userImage'>
                    <img src='/images/female-avatar.png' alt='user' />
                </div>
                <p>User Name</p>
            </section>
            <section className='content'>
                <img src='/images/postImage.jpeg' alt='post' />
            </section>
        </div>
    );
}

export default Post;
