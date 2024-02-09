import { useState } from "react";
import CourseContext from "./courseContext";

const CourseState = (props) => {
  const host = process.env.REACT_APP_YOUR_BASE_URL;

  const initialCourse = []

  const [courses, setCourse] = useState(initialCourse);

  // Add a Course
  const addCourse = async (title, description, instructor, duration, price) => {
    // console.log('Adding a new Course');

    const response = await fetch(`${host}/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': ` Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({title, description, instructor, duration, price}),
      });
      getCourses(setCourse)
      // console.log("response:", response)
      const course = await response.json();
      setCourse(courses.concat(course));
  };

// Get all Courses
const getCourses = async () => {

    const response = await fetch(`${host}/courses/all_courses`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': ` Bearer ${localStorage.getItem('token')}`
        }
        });
        const json = await response.json();
        // console.log('json', json);
    // setCourse(courses.concat(json));
    setCourse(json.data);
    };

  // Delete a note
  const deleteCourse = async (id) => {
    const response = await fetch(`${host}/courses?course_id=${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': ` Bearer ${localStorage.getItem('token')}`
        }
      });
  
      const json = await response.json();
    // console.log("json", json);
    const newCourses = courses.filter((course) => {
      return course._id !== id;
    });
    setCourse(newCourses);
  };

  // Edit a Course
  const updateCourse = async (id, title, description, instructor, duration, price) => {

    const response = await fetch(`${host}/courses`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization': ` Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({_id: id, title, description, instructor, duration, price}),
    });

    const json = await response.json();
    // console.log('json', json)

    let newCourses = JSON.parse(JSON.stringify(courses));
    // console.log('courses', courses)

    for (let i = 0; i < newCourses.length; i++) {
      const element = newCourses[i];
      // console.log('element', element)
      if (element._id === id) {
        newCourses[i].title = title;
        newCourses[i].description = description;
        newCourses[i].instructor = instructor;
        newCourses[i].duration = duration;
        newCourses[i].price = price;
        break;
      }
    }
    // console.log('newCourses', newCourses);
    setCourse(newCourses);
    // console.log('courses', courses)
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, getCourses, deleteCourse, updateCourse }}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
