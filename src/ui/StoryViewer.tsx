import './StoryViewer.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function StoryViewer() {
    return (
        <div className="storyViewer">
            <div>
                <section className='progressbar'>

                </section>
                <section className='header'>
                    <div className='userImage'>
                        <img src='/images/female-avatar.png' alt='user' />
                    </div>
                    <p>User Name</p>
                    <CloseRoundedIcon className='closeIcon' />
                </section>
            </div>
            <section className='content'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDC7cZgtUfDkIPi3KoZCSbbjd9egp_5Gs8_A&s' alt='post' />
            </section>
        </div>
    )
}
