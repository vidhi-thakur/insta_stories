import { Skeleton } from '@mui/material'

function StoryLoader() {
    return (
        <>
            {new Array(7).fill(0).map((_, index) => <Skeleton key={index} variant="circular" width={70} height={70} />)}
        </>
    )
}

export default StoryLoader