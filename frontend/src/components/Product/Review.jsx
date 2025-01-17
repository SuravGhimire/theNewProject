import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ReviewInfo from "./ReviewInfo";
import axios from 'axios'
import CreateReview from "./CreateReview";

 
function Review() {
  const { productId } = useParams()
  const [reviews, setReviews] = useState(null)


  useEffect(()=>{
    axios
    .get(`http://localhost:3000/api/v1/products/get-reviews/${productId}`)
    .then((res)=>{
      setReviews(res?.data?.data?.reviewers)
    })
    .catch(error=>{
      console.log(error)
    })

  }, [])
  
  console.log("Reviews::", reviews)

  return (
    <div>
      <div className="text-[#FF9800] text-center font-bold text-4xl mt-2">
        Reviews
      </div>
      <CreateReview />
      {reviews && reviews.map((reviewData)=>(
        <ReviewInfo key={reviewData._id} {...reviewData} />
      ))}
    </div>
  );
}

export default Review;
