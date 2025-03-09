import './Story.css';

interface StoryProps {
  handleClick: (id: number) => void;
  image: string;
  id: number;
}

function Story({ handleClick, image, id }: StoryProps) {
  return (
    <div onClick={() => handleClick(id)} className="story">
      {!image ? null : <img src={image} alt="user story" />}
    </div>
  );
}

export default Story;
