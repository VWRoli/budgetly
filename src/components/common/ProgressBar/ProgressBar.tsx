const ProgressBar: React.FC = (): JSX.Element => {
  return (
    <div className="progressbar-wrapper">
      <div className="outer">
        <div className="inner">
          <div id="number">65%</div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default ProgressBar;
