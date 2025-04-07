// src/components/Courses.js
import React from 'react';

function Courses() {
  return (
    <section>
      <h2>Our Courses</h2>
      <p>We offer a variety of online courses to help you enhance your skills. Choose the best one for you!</p>

      <div className="course-cards">
        <div className="course-card">
          <h3>Web Development Basics</h3>
          <p>Start your journey with web development by learning HTML, CSS, and JavaScript.</p>
        </div>
        <div className="course-card">
          <h3>Advanced React</h3>
          <p>Level up your React skills and master hooks, context, and state management.</p>
        </div>
        <div className="course-card">
          <h3>Python for Beginners</h3>
          <p>Learn the basics of Python and start writing your first Python programs.</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
