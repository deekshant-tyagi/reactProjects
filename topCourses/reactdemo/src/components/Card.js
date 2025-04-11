import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import {toast} from 'react-toastify'

const Card = ({course,likedCourses,setLikedCourses}) => {
  function clickHandler(){
    if (likedCourses.includes(course.id)) {
      // course is already liked
      setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)))
      toast.warning("like removed");
    }else{
        if (likedCourses.length === 0) {
          setLikedCourses([course.id]);
        }else{
          setLikedCourses((prev)=>[...prev,course.id]);
        }
        toast.success("like added");
    }
  }
  return (
    <div>
        <div>
        <img src={course.image.url}/>
            <div>
                <button onClick={clickHandler}>
                  {
                    !likedCourses.includes(course.id)?(
                      <FcLikePlaceholder fontSize="1.75rem"/>
                    ):(
                      <FcLike fontSize="1.75rem" />
                    ) 
                  }
                </button>
            </div>
        </div>
        <div>
          <p>{course.title}</p>
          <p>
            {
              (course.description.length>100)?(
                course.description.substr(0,100)+"..."
              ):(
                course.description
              )
            }
          </p>
        </div>
    </div>
  )
}

export default Card