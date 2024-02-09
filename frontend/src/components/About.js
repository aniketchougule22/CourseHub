import React from "react";

const About = () => {
  return (
    <div className="container accordion" id="accordionPanelsStayOpenExample">
      <h2 className="mb-3">Let's start with CourseHub</h2>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            What is the CourseHub app?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            <strong>
              The CourseHub app is a comprehensive platform designed to
              facilitate learning by offering a vast array of courses across
              various disciplines.
            </strong>
            It serves as a centralized hub where users can explore, discover,
            and enroll in courses tailored to their interests and career
            aspirations. With CourseHub, users can embark on a journey of
            continuous learning, gaining access to high-quality educational
            resources and opportunities to expand their knowledge and skills.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Use of CourseHub app
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <strong>
              The CourseHub app serves as a versatile tool for individuals
              seeking to expand their knowledge and skills across various
              subjects.
            </strong>
            Users leverage CourseHub to explore diverse course offerings, enroll
            in topics of interest, and advance their personal and professional
            development. It empowers learners to access educational resources
            conveniently, fostering continuous growth and learning journeys
            tailored to individual aspirations and goals.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            How does CourseHub cater to different learning styles?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <strong>
              CourseHub embraces a variety of teaching methods, including video
              lectures, interactive quizzes, hands-on projects, and peer-to-peer
              collaboration, catering to diverse learning preferences and
              styles.
            </strong>
            By offering a blend of visual, auditory, and kinesthetic learning
            experiences, CourseHub ensures that every learner can engage with
            content in ways that resonate with their individual learning
            preferences.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            What sets CourseHub apart from other online learning platforms?
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            CourseHub stands out for its commitment to quality, diversity, and
            user-centricity. With a vast and curated selection of courses
            spanning numerous disciplines, CourseHub offers unparalleled access
            to educational resources that cater to a wide range of interests and
            skill levels. Moreover, CourseHub prioritizes user feedback and
            continually refines its platform to enhance usability,
            accessibility, and overall learning outcomes.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFour"
          >
            It’s more interactive
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFour"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <strong>
              Yes, the CourseHub app offers an interactive learning experience,
              engaging users through dynamic features and interactive elements.
            </strong>
            From browsing diverse course options to participating in
            discussions, quizzes, and collaborative projects, CourseHub fosters
            active engagement and meaningful interaction among learners and
            instructors. Through interactive features such as forums, live
            sessions, and hands-on assignments, users can actively participate
            in their learning journey, making the educational experience both
            engaging and enriching.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFive"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFive"
          >
            Future scope of CourseHub
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFive"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            The future scope of CourseHub is promising and multifaceted. As
            technology advances and education evolves, CourseHub aims to adapt
            and innovate, continuously expanding its offerings and enhancing
            user experiences. The platform seeks to integrate emerging
            technologies like AI and machine learning to personalize learning
            paths, recommend relevant courses, and optimize user engagement.
            Additionally, CourseHub aspires to forge partnerships with
            educational institutions, industry experts, and content creators to
            diversify its course catalog and provide cutting-edge learning
            opportunities. With a commitment to accessibility and inclusivity,
            CourseHub envisions empowering learners worldwide, bridging gaps in
            education and catalyzing lifelong learning initiatives for a
            brighter future.
            <strong> i.e. 2024 to 2050.</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
