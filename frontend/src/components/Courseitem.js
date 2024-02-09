import React, { useContext } from "react";
import courseContext from "../context/courses/courseContext";

// const Courseitem = (props) => {
//   const context = useContext(courseContext);
//   const { deleteCourse } = context;
//   const { course, updateCourse } = props;
//   return (
//     <div className="col-md-3">
//       <div className="card my-3">
//         <div className="card-body">
//         <div className="d-flex align-items-center">
//           <h5 className="card-title">{course.title}</h5>
//           <i className="far fa-trash-alt mx-2" onClick={()=> {deleteCourse(course._id); props.showAlert("Deleted successfully..!", "success");}}></i>
//           <i className="far fa-edit mx-2" onClick={()=> {updateCourse(course)}}></i>
//           </div>
//           <p className="card-text">{course.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


const Courseitem = (props) => {
  const context = useContext(courseContext);
  const { deleteCourse } = context;
  const { course, updateCourse } = props;
  return (
    // <div className="col-md-3">
    //   <div className="card my-3">
    //     <div className="card-body">
    //     <div className="d-flex align-items-center">
    //       <h5 className="card-title">{course.title}</h5>
          // <i className="far fa-trash-alt mx-2" onClick={()=> {deleteCourse(course._id); props.showAlert("Deleted successfully..!", "success");}}></i>
          // <i className="far fa-edit mx-2" onClick={()=> {updateCourse(course)}}></i>
    //       </div>
    //       <p className="card-text">{course.description}</p>
    //     </div>
    //   </div>
    // </div>


    <>
      <table className="table table-striped table-hover">
      <thead>
        <tr>
          {/* <th scope="col">Sr No</th> */}
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Instructor</th>
          <th scope="col">Duration</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
       {
        props.courses?.map((course, key)=> {
          return(
          <tr key={key}>
          <td>{course.title}</td>
          <td>{course.description}</td>
          <td>{course.instructor}</td>
          <td>{course.duration}</td>
          <td>{course.price}</td>
          <td>
          <i className="far fa-trash-alt mx-2" onClick={()=> {deleteCourse(course._id); props.showAlert("Deleted successfully..!", "success");}}></i>
          <i className="far fa-edit mx-2" onClick={()=> {updateCourse(course)}}></i>
          </td>
          </tr>
          )
        })
       }
      </tbody>
    </table>
    </>
  );
}

export default Courseitem;
