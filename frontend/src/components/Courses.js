import React, { useContext, useEffect, useRef, useState } from "react";
import courseContext from "../context/courses/courseContext";
import AddCourse from "./AddCourse";
import Courseitem from "./Courseitem";
import { useNavigate } from "react-router-dom";

const Courses = (props) => {
  const context = useContext(courseContext);
  const { courses, getCourses, updateCourse } = context;
  let navigate = useNavigate();

  const [course, setCourse] = useState({ id: "", edittitle: "", editdescription: "", editinstructor: "", editduration: "", editprice: "" });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getCourses();
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  const editCourse = (currentCourse) => {
    ref.current.click();
    setCourse({
      id: currentCourse._id, 
      edittitle: currentCourse.title, 
      editdescription: currentCourse.description, 
      editinstructor: currentCourse.instructor,
      editduration: currentCourse.duration,
      editprice: currentCourse.price
    });
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  const handleEditClick = (e) => {
    updateCourse(course.id, course.edittitle, course.editdescription, course.editinstructor, course.editduration, course.editprice);
    refClose.current.click();
    props.showAlert("Updated successfully..!", "success");
  };

  const onChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddCourse showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Course
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form className="my-3">

                <div className="mb-3">
                  <label htmlFor="edittitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    name="edittitle"
                    className="form-control"
                    id="edittitle"
                    aria-describedby="emailHelp"
                    value={course.edittitle}
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="editdescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    name="editdescription"
                    className="form-control"
                    id="editdescription"
                    value={course.editdescription}
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>

                <div className="mb-3">
                <label htmlFor="editinstructor" className="form-label">
                Instructor
                </label>
                <input
                  type="text"
                  name="editinstructor"
                  className="form-control"
                  id="editinstructor"
                  value={course.editinstructor}
                  onChange={onChange}
                  minLength={3}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="editduration" className="form-label">
                Duration
                </label>
                <input
                  type="number"
                  name="editduration"
                  className="form-control"
                  id="editduration"
                  value={course.editduration}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="editprice" className="form-label">
                Price
                </label>
                <input
                  type="number"
                  name="editprice"
                  className="form-control"
                  id="price"
                  value={course.editprice}
                  onChange={onChange}
                  required
                />
              </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={course.edittitle.length<3 || course.editdescription.length<5} type="button" className="btn btn-primary" onClick={handleEditClick}>
                Update Course
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2 className="my-4">Your Courses</h2><hr/>
        <div className="container mx-2">
          {course.length===0 && 'No Courses to display!'}
        </div>
        {/* {courses.map((ele) => {
          return <Courseitem key={ele._id} updateCourse={editCourse} course={ele} showAlert={props.showAlert} />;
        })} */}
        <Courseitem courses={courses} updateCourse={editCourse} showAlert={props.showAlert}  />
      </div>
    </>
  );
};

export default Courses;
