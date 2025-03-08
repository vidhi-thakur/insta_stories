import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import Story from './ui/Story';
import Post from './ui/Post';
import { CircularProgress } from '@mui/material';
import PostLoader from './ui/PostLoader';
import { getMockPostData } from './api/mockPostAPI';

const StoryViewer = lazy(() => import('./ui/StoryViewer'));

interface PostProps {
  userName: string,
  image: string
}

function App() {
  useEffect(() => {

    (async () => {
      setPostLoading(true);
      const data: PostProps[] = await getMockPostData({ api: '/data/posts.json' });
      setPosts(data);
      setPostLoading(false);

    })();
  }, [])
  const [isStoryOpen, setStoryOpen] = useState(false);
  const [isPostLoading, setPostLoading] = useState(false);
  const [posts, setPosts] = useState<PostProps[] | null>(null);
  return (
    <div className="App">
      <div className='mobile'>
        {isStoryOpen ? <section className='storyViewer_outer'>
          <Suspense fallback={<CircularProgress sx={{ position: "absolute", top: "40%", left: "50%" }} color="inherit" />}>
            <StoryViewer handleClose={() => setStoryOpen(false)} />
          </Suspense>
        </section> : null}
        <section className='stories'>
          <div className='hide-scrollbar'>
            <Story handleClick={() => setStoryOpen(true)} />
            <Story handleClick={() => setStoryOpen(true)} />
            <Story handleClick={() => setStoryOpen(true)} />
            <Story handleClick={() => setStoryOpen(true)} />
            <Story handleClick={() => setStoryOpen(true)} />
            <Story handleClick={() => setStoryOpen(true)} />
            <Story handleClick={() => setStoryOpen(true)} />
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
