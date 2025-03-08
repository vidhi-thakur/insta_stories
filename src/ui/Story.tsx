import './Story.css';

interface StoryProps {
  handleClick: () => void;
  image: string;
}

function Story({ handleClick, image }: StoryProps) {
  return (
    <div onClick={handleClick} className="story">
      {!image ? null : <img src={image} alt="user story" />}
    </div>
  );
}

export default Story;
