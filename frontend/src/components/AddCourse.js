import React, { useContext, useState } from "react";
import courseContext from "../context/courses/courseContext";

const AddCourse = (props) => {
  const context = useContext(courseContext);
  const { addCourse } = context;

  const [course, setCourse] = useState({title: "", description: "", instructor: "", duration: "", price: ""});

    const handleAddCourseClick = (e) => {
        e.preventDefault();
        addCourse(course.title, course.description, course.instructor, course.duration, course.price);
        setCourse({title: "", description: "", instructor: "", duration: "", price: ""});
        props.showAlert("Course added successfully..!", "success");
    }

    const onChange = (e) => {
        setCourse({...course, [e.target.name]: e.target.value})
    }

  return (
    <div className="container my-2">
      <h2>Add a Course</h2><hr/>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            value={course.title}
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={3}
            required
          />
        </div>


        <div className="mb-3">
          <label htmlFor="description" className="form-label">
          Description
          </label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            value={course.description}
            onChange={onChange}
            minLength={3}
            required
          />
        </div>


        <div className="mb-3">
          <label htmlFor="instructor" className="form-label">
          Instructor
          </label>
          <input
            type="text"
            name="instructor"
            className="form-control"
            id="instructor"
            value={course.instructor}
            onChange={onChange}
            minLength={3}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
          Duration
          </label>
          <input
            type="number"
            name="duration"
            className="form-control"
            id="duration"
            value={course.duration}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
          Price
          </label>
          <input
            type="number"
            name="price"
            className="form-control"
            id="price"
            value={course.price}
            onChange={onChange}
            required
          />
        </div>


        <button disabled={course.title.length<3 || course.description.length<5} type="submit" className="btn btn-primary" onClick={handleAddCourseClick}>
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
