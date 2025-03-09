import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import Story from './ui/Story';
import Post from './ui/Post';
import { CircularProgress } from '@mui/material';
import PostLoader from './ui/PostLoader';
import { getMockPostData } from './api/mockPostAPI';
import { getMockSingleStory, getMockStoryThumbnailData } from './api/mockStoryAPI';
import StoryLoader from './ui/StoryLoader';

const StoryViewer = lazy(() => import('./ui/StoryViewer'));

interface PostProps {
  userName: string,
  image: string
}

interface StoryProps {
  userName: string,
  images: string[],
  id: number,
  hasMore: boolean,
  hasPrev: boolean,
}

interface StoryThumbnailProps {
  image: string,
  id: number,
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
  const [storythumbnails, setStoryThumbnails] = useState<StoryThumbnailProps[] | null>(null);
  const [currentUserStory, setCurrentUserStory] = useState<null | StoryProps>(null);
  const [isCurrentStoryLoading, setCurrentStoryLoading] = useState(false);


  const handleStoryClick = async (id: number) => {
    setStoryOpen(true);
    setCurrentStoryLoading(true);
    const data = await getMockSingleStory({ api: "/data/stories.json", id });
    setCurrentUserStory(data);
    setCurrentStoryLoading(false);
  }

  const handleNextStory = async (id: number) => {
    setCurrentStoryLoading(true);
    const data = await getMockSingleStory({ api: "/data/stories.json", id: id + 1 });
    setCurrentUserStory(data);
    setCurrentStoryLoading(false);
  }

  const handlePrevStory = async (id: number) => {
    setCurrentStoryLoading(true);
    const data = await getMockSingleStory({ api: "/data/stories.json", id: id - 1 });
    setCurrentUserStory(data);
    setCurrentStoryLoading(false);
  }

  return (
    <div className="App">
      <div className='mobile'>
        {isStoryOpen ? <section className='storyViewer_outer'>
          <Suspense fallback={<CircularProgress sx={{ position: "absolute", top: "40%", left: "50%" }} color="inherit" />}>
            {currentUserStory ? <StoryViewer handlePrevStory={handlePrevStory} handleNextStory={handleNextStory} loading={isCurrentStoryLoading} currentUserStory={currentUserStory} handleClose={() => setStoryOpen(false)} /> : null}
          </Suspense>
        </section> : null}
        <section className='stories'>
          <div className='hide-scrollbar'>
            {!isStoryLoading && storythumbnails ? storythumbnails.map(val => <Story {...val} key={val.id} handleClick={handleStoryClick} />) :
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
