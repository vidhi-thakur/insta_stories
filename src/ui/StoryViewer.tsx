import { CircularProgress } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import './StoryViewer.css'
import { useEffect, useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

interface StoryViewerProps {
    handleClose: () => void,
    handleNextStory: (id: number) => void,
    handlePrevStory: (id: number) => void,
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
    handlePrevStory,
    currentUserStory,
    loading
}: StoryViewerProps) {
    useEffect(() => {
        setCurrImageIndex(0)
    }, [currentUserStory.id])

    const [currImageIndex, setCurrImageIndex] = useState(0);
    useEffect(() => {
        let id1 = setInterval(() => {
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

        return () => clearInterval(id1);

    }, [currImageIndex])

    const handleNext = () => {
        if (currImageIndex < currentUserStory.images.length - 1) {
            setCurrImageIndex(i => i + 1)
        } else if (currentUserStory.hasMore) {
            // make API all for next story
            handleNextStory(currentUserStory.id)
        }
    }

    const handlePrev = () => {
        if (currImageIndex > 0) {
            setCurrImageIndex(i => i - 1)
        } else if (currentUserStory.hasPrev) {
            // make API all for prev story
            handlePrevStory(currentUserStory.id)
        }
    }

    if (loading) {
        return <div className='loading'>
            <CircularProgress color="inherit" />
        </div>
    }
    return (
        <div className="storyViewer">
            <div>
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
            {currentUserStory.hasMore ? <ArrowForwardIosRoundedIcon onClick={handleNext} className='icon nextIcon' /> : null}
            {currentUserStory.hasPrev ? <ArrowBackIosNewRoundedIcon onClick={handlePrev} className='icon prevIcon' /> : null}
        </div>
    )
}
