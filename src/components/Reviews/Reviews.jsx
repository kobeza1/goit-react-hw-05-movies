import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'utils/api-service';
import {
  ReviewsItem,
  ReviewsList,
  ReviewsTitle,
  TextContent,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMoviesReviews(id).then(setReviews);
  }, [id]);

  return reviews.length > 0 ? (
    <ReviewsList>
      {reviews.map(({ author, content, id }) => (
        <ReviewsItem key={id}>
          <ReviewsTitle>Author: ${author}</ReviewsTitle>
          <TextContent>{content}</TextContent>
        </ReviewsItem>
      ))}
    </ReviewsList>
  ) : (
    <p>There are no reviews</p>
  );
};

export default Reviews;
