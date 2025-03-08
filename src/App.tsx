import { lazy, Suspense, useState } from 'react';
import './App.css';
import Story from './ui/Story';
import Post from './ui/Post';
import { CircularProgress } from '@mui/material';

const StoryViewer = lazy(() => import('./ui/StoryViewer'));

function App() {
  const [isStoryOpen, setStoryOpen] = useState(false);
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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
      </div>
    </div>
  );
}

export default App;
