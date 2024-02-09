import Courses from "./Courses";

const Home = (props) => {

  const { showAlert } = props;
  return (
    <div>
      <Courses showAlert={showAlert}/>
    </div>
  );
};

export default Home;
