import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started B.Tech in Information Technology</h4>
                <h5>Guru Gobind Singh Indraprastha University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Began my academic journey, building a strong foundation in programming, problem-solving, and core computer science concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Built Foundation in Data Science</h4>
                <h5>Tools: Python, Pandas, NumPy, Matplotlib</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed core skills in data science, focusing on data cleaning, exploratory data analysis (EDA), and visualization using Python libraries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Built Data Analytics Project</h4>
                <h5>Tools: Python, Pandas, Streamlit</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Applied data science concepts by developing an interactive data dashboard to analyze real-world datasets and extract insights. (Project details in Projects section)
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Exploring AI & Machine Learning</h4>
                <h5>Focus: Model building, feature engineering, evaluation</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently learning machine learning concepts including regression, classification, and model evaluation, with hands-on practice and experimentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
