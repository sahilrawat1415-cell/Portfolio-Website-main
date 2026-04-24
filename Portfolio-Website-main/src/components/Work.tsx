import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-grid">
          <div className="work-card">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>IPL Analytics Dashboard</h4>
                  <p>Data Visualization</p>
                </div>
              </div>
              <p className="work-desc">
                Interactive Streamlit dashboard analyzing IPL match data with advanced metrics, player comparisons, and venue analysis.
              </p>
              <p className="work-tech">Python, Pandas, Streamlit, Matplotlib</p>
              <p className="work-tech">
                GitHub: <a href="https://github.com/sahilrawat1415-cell/projectipl" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://github.com/sahilrawat1415-cell/IPL-Analytics-Dashboard</a>
              </p>
              <p className="work-tech">
                Live link: <a href="https://ipl-dashboard-sahil.streamlit.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://github.com/sahilrawat1415-cell/IPL-Analytics-Dashboard</a>
              </p>
            </div>
            <WorkImage image="pics\image.png" alt="IPL Dashboard" />
          </div>

          <div className="work-card">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Portfolio Website</h4>
                  <p>Web Development</p>
                </div>
              </div>
              <p className="work-desc">
                Personal portfolio featuring a 3D animated character, physics-based tech stack visualization, and smooth scroll animations.
              </p>
              <p className="work-tech">React, Three.js, GSAP, TypeScript</p>
            </div>
            <WorkImage image="pics\image copy.png" alt="Portfolio" />
          </div>

          <div className="work-card">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Python Trading Bot</h4>
                  <p>Algorithmic Trading</p>
                </div>
              </div>
              <p className="work-desc">
                Automated cryptocurrency trading bot that interacts with exchange APIs to execute trades based on predefined strategies and market analysis.
              </p>
              <p className="work-tech">Python, Binance API, TradingView</p>
              <p className="work-tech">
                GitHub: <a href="https://github.com/sahilrawat1415-cell/pythontradebot" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://github.com/sahilrawat1415-cell/pythontradebot</a>
              </p>
              <p className="work-tech">
                Live link: <a href="https://demo.binance.com/en/futures/BTCUSDT" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://github.com/sahilrawat1415-cell/IPL-Analytics-Dashboard</a>
              </p>
            </div>
            <WorkImage image="pics\image copy 2.png" alt="Python Trading Bot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
