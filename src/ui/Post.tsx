import './Post.css';

interface PostProps {
    userName: string,
    image: string
}

function Post({ userName, image }: PostProps) {
    return (
        <div className="post">
            <section className='header'>
                <div className='userImage'>
                    <img src='/images/female-avatar.png' alt='user' />
                </div>
                <p>{userName}</p>
            </section>
            <section className='content'>
                <img src={image} alt='post' />
            </section>
        </div>
    );
}

export default Post;
