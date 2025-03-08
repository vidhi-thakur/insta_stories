import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import Story from './ui/Story';
import Post from './ui/Post';
import { CircularProgress } from '@mui/material';
import PostLoader from './ui/PostLoader';
import { getMockPostData } from './api/mockPostAPI';
import { getMockStoryThumbnailData } from './api/mockStoryAPI';
import StoryLoader from './ui/StoryLoader';

const StoryViewer = lazy(() => import('./ui/StoryViewer'));

interface PostProps {
  userName: string,
  image: string
}

interface StoryProps {
  userName: string,
  images: string[]
}

function App() {
  useEffect(() => {

    (async () => {
      setPostLoading(true);
      const data: PostProps[] = await getMockPostData({ api: '/data/posts.json' });
      setPosts(data);
      setPostLoading(false);

    })();
    (async () => {
      setStoryLoading(true)
      const data = await getMockStoryThumbnailData({ api: '/data/stories.json' })
      console.log(data);
      setStoryThumbnails(data)
      setStoryLoading(false)
    })();
  }, [])

  // States for Post
  const [isPostLoading, setPostLoading] = useState(false);
  const [posts, setPosts] = useState<PostProps[] | null>(null);

  // States for story
  const [isStoryOpen, setStoryOpen] = useState(false);
  const [isStoryLoading, setStoryLoading] = useState(false);
  const [storythumbnails, setStoryThumbnails] = useState<string[] | null>(null);
  const [currentUserStory, setCurrentUserStory] = useState<null | StoryProps>(null)

  return (
    <div className="App">
      <div className='mobile'>
        {isStoryOpen ? <section className='storyViewer_outer'>
          <Suspense fallback={<CircularProgress sx={{ position: "absolute", top: "40%", left: "50%" }} color="inherit" />}>
            {currentUserStory ? <StoryViewer currentUserStory={currentUserStory} handleClose={() => setStoryOpen(false)} /> : null}
          </Suspense>
        </section> : null}
        <section className='stories'>
          <div className='hide-scrollbar'>
            {!isStoryLoading && storythumbnails ? storythumbnails.map(val => <Story image={val} key={val} handleClick={() => setStoryOpen(true)} />) :
              <StoryLoader />}
          </div>
        </section>
        <section className='posts hide-scrollbar'>
          {isPostLoading || !posts ? <>
            <PostLoader />
            <PostLoader />
            <PostLoader />
          </> : <>
            {posts.map((val, index) => <Post {...val} key={index} />)}
          </>}
        </section>
      </div>
    </div>
  );
}

export default App;
