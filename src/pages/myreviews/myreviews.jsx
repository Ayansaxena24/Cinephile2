import React from "react";
import Cards2 from "../../components/card/Card2";
import { reviewsData } from "./reviewsData"; // Import the named export

export default function MyReviews() {
  return (
    <div>
      <div className="flex justify-center">
        <p className="text-center font-bold text-3xl">My Reviews</p>
      </div>
      <div className="grid grid-cols-5 px-60 mt-4">
        {reviewsData.map((reviews) => (
          <Cards2 key={reviews.id} reviews={reviews} />
        ))}
      </div>
    </div>
  );
}
