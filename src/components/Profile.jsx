import React from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'

const Profile = () => {
  return (
    <div>
      <p className=" my-10">This is Profile.</p>
      <div className=" my-10 mx-5 grid-cols-3">
      <LazyLoadImage src="./lazy-img.jpg" alt="lazy-image"  width={200} />
      <br/>
      <LazyLoadImage src="./img-1.jpg" alt="lazy-image-1"  width={200} />
      {/* <LazyLoadImage src="./img-2.jpg" alt="lazy-image-2"  width={300} /> */}
      {/* <LazyLoadImage src="./img-3.jpg" alt="lazy-image-3"  width={300} /> */}
      {/* <LazyLoadImage src="./img-4.jpg" alt="lazy-image-4"  width={300} /> */}
      </div>
    </div>
  )
}

export default Profile
