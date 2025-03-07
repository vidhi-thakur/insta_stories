import './App.css';
import Story from './ui/Story';
import Post from './ui/Post';

function App() {
  return (
    <div className="App">
      <div className='mobile'>
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
