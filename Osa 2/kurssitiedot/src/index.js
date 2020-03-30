import React from 'react';
import ReactDOM from 'react-dom';
import {course, Content, Total, Header} from './Courses'


const App = () => {

  return (
    <div>
      <h1>Web development curriculum</h1>
        {course.map(course => 
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
          </div>
        )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))