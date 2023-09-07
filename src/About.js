

import ReactPlayer from 'react-player';

function About() {
  const videoUrl = "https://www.youtube.com/watch?v=rNWaLeZ5TV0";
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <h1>React player</h1>
      <ReactPlayer 
        url={videoUrl}
        playing={true}
        volume={0.5}
      />
    </div>
  )
}

export default About;