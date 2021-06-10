import React from 'react';
import Banner from '../components/Banner';
// import TeacherTabs from '../components/TeacherTabs';
import Mission from '../components/Mission';
import Features from '../components/Features';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      {/* {teacherInfo ? (<TeacherTabs/>) : ("")} */}
      <Banner/>
      <Mission/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Home
