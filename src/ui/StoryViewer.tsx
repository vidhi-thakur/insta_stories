import { CircularProgress, LinearProgress } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './StoryViewer.css'
import { useEffect, useState } from 'react';

interface StoryViewerProps {
    handleClose: () => void,
    handleNextStory: (id: number) => void,
    currentUserStory: {
        userName: string,
        images: string[],
        id: number,
        hasMore: boolean,
        hasPrev: boolean,
    }
    loading: boolean
}

export default function StoryViewer({
    handleClose,
    handleNextStory,
    currentUserStory,
    loading
}: StoryViewerProps) {
    useEffect(() => {
        setCurrImageIndex(0)
    }, [currentUserStory.id])

    const [currImageIndex, setCurrImageIndex] = useState(0);
    useEffect(() => {
        let id = setInterval(() => {
            if (currImageIndex < currentUserStory.images.length - 1) {
                setCurrImageIndex(i => i + 1)
            } else {
                if (currentUserStory.hasMore) {
                    // make API all for next story
                    handleNextStory(currentUserStory.id)
                } else {
                    handleClose()
                }
            }
        }, 5000);

        return () => clearInterval(id)

    }, [currImageIndex])



    if (loading) {
        return <div className='loading'>
            <CircularProgress color="inherit" />
        </div>
    }
    return (
        <div className="storyViewer">
            <div>
                <section className='progressbar_outer'>
                    {currentUserStory.images.map(val => <div key={val} className='progressbar'>
                        <LinearProgress variant="determinate" color="inherit" value={50} />
                    </div>)}
                </section>
                <section className='header'>
                    <div className='userImage'>
                        <img src='/images/female-avatar.png' alt='user avatar' />
                    </div>
                    <p>{currentUserStory.userName}</p>
                    <CloseRoundedIcon onClick={handleClose} className='closeIcon' />
                </section>
            </div>
            <section className='content'>
                <img src={currentUserStory.images[currImageIndex]} alt='single story' />
            </section>
        </div>
    )
}
