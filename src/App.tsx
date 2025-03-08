import { lazy, Suspense } from 'react';
import './App.css';
import Story from './ui/Story';
import Post from './ui/Post';
import { CircularProgress } from '@mui/material';

const StoryViewer = lazy(() => import('./ui/StoryViewer'));

function App() {
  return (
    <div className="App">
      <div className='mobile'>
        <section className='storyViewer_outer'>
          <Suspense fallback={<CircularProgress sx={{ position: "absolute", top: "40%", left: "50%" }} color="inherit" />}>
            <StoryViewer />
          </Suspense>
        </section>
        <section className='stories'>
          <div className='hide-scrollbar'>
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
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
