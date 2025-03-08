import './Story.css';

interface StoryProps {
  handleClick: () => void;
}

function Story({ handleClick }: StoryProps) {
  return (
    <div onClick={handleClick} className="story">

    </div>
  );
}

export default Story;
