import { Skeleton } from '@mui/material'
import './PostLoader.css'

export default function PostLoader() {
    return (
        <div className='postLoader'>
            <div className='header'>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', width: "50%" }} />
            </div>
            <Skeleton variant="rectangular" width="100%" height={300} />
        </div>
    )
}
