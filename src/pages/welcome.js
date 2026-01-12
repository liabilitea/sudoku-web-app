import Button from '../components/button';

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="title-container">
        <p className="welcome-text">Welcome to</p>
        <h1 className="title">
          <span className="green">Su</span>
          <span className="red">do</span>
          <span className="blue">k</span>
          <span className="yellow">u</span>
          <span> </span>
          <span className="blue">So</span>
          <span className="yellow">l</span>
          <span className="blue">ver</span>
        </h1>
      </div>
      
      <Button>Use Solver</Button>
      <Button>Play</Button>
    </div>
  );
}

export default WelcomePage;