import React from 'react';
import './Skills.scss';

const Skills = () => {
  return (
    <div className="skills container">
      <div className="main-div">
        <div className="banner-intro">
          my skills
        </div>
        <div className="icons-div">
          <div className="icons">
            <img src="https://i.postimg.cc/wMdC7rT2/icons8-html-filetype-52.png" alt="html" />
          </div>
          <div className="icons">
            <img src="https://i.postimg.cc/bwK3ytvH/icons8-css-filetype-52-1.png" alt="css" />
          </div>
          <div className="icons">
            <img src="https://i.postimg.cc/90r7wL84/icons8-javascript-50.png" alt="javescript" />
          </div>
          <div className="icons">
            <img src="https://i.postimg.cc/x1HLPF0M/icons8-react-native-50.png" alt="react" />
          </div>
          <div className="icons">
            <img src="https://i.postimg.cc/QdkHCL84/icons8-bootstrap-64.png" alt="bootstrap" />
          </div>
          <div className="icons">
            <img src="https://i.postimg.cc/8zBbhPBL/icons8-material-ui-96.png" alt="material-ui" />
          </div>
          <div className="icons">
            <img src="https://i.postimg.cc/VkRjJZmR/icons8-source-code-64.png" alt="ajax" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;