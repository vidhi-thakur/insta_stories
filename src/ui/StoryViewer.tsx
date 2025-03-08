import { LinearProgress } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './StoryViewer.css'

interface StoryViewerProps {
    handleClose: () => void;
}

export default function StoryViewer({
    handleClose
}: StoryViewerProps) {
    return (
        <div className="storyViewer">
            <div>
                <section className='progressbar_outer'>
                    <div className='progressbar'>
                        <LinearProgress variant="determinate" color="inherit" value={50} />
                    </div>
                    <div className='progressbar'>
                        <LinearProgress variant="determinate" color="inherit" value={0} />
                    </div>
                </section>
                <section className='header'>
                    <div className='userImage'>
                        <img src='/images/female-avatar.png' alt='user' />
                    </div>
                    <p>User Name</p>
                    <CloseRoundedIcon onClick={handleClose} className='closeIcon' />
                </section>
            </div>
            <section className='content'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDC7cZgtUfDkIPi3KoZCSbbjd9egp_5Gs8_A&s' alt='post' />
            </section>
        </div>
    )
}
