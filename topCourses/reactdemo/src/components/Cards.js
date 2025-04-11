import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses,category}) => {
  const [likedCourses,setLikedCourses] = useState([]);
    // it returns u a list of all courses received from api response
    const getCourses = () =>{
      if (category==='All') {
        let allCourses = [];
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
      }else{
        return courses[category];
      }
    }

    return (
        <div>
          {getCourses().map((course) => (
            <Card key={course.id} 
            course={course} 
            likedCourses = {likedCourses}
            setLikedCourses = {setLikedCourses}
            />
          ))}
        </div>
      )
}

export default Cards