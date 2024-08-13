<template>
  <div class="container mt-5">
    <h2>Submit Your Review</h2>
    <form @submit.prevent="submitReview">
      <!-- Textarea for Comments/Reviews -->
      <div class="mb-3">
        <label for="reviewText" class="form-label">Your Comment</label>
        <textarea
          class="form-control"
          id="reviewText"
          rows="4"
          placeholder="Write your review here..."
          v-model="reviewText"
        ></textarea>
        <input type="text" class="form-control mt-3" placeholder="Reviewer Name" name="reveiwerName" v-model="reviewerName">
      </div>
      <!-- Star Rating System -->
      <div class="mb-3">
        <label class="form-label">Your Rating</label>
        <div class="rating">
          <input
            type="radio"
            name="rating"
            id="star5"
            v-model="starRate"
            value="5"
          /><label for="star5"><i class="bi bi-star-fill"></i></label>
          <input
            type="radio"
            name="rating"
            id="star4"
            v-model="starRate"
            value="4"
          /><label for="star4" class="bi bi-star-fill"></label>
          <input
            type="radio"
            name="rating"
            id="star3"
            v-model="starRate"
            value="3"
          /><label for="star3" class="bi bi-star-fill"></label>
          <input
            type="radio"
            name="rating"
            id="star2"
            v-model="starRate"
            value="2"
          /><label for="star2" class="bi bi-star-fill"></label>
          <input
            type="radio"
            name="rating"
            id="star1"
            v-model="starRate"
            value="1"
          /><label for="star1" class="bi bi-star-fill"></label>
        </div>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Submit Review</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      review: {
        reviewText: "",
        reviewerName: "",
        starRate: 0,
      },
    };
  },
  // computed: {
  //   reviewText() {
  //     this.$emit('review-text')
  //   }
  // },
  methods: {
    submitReview() {
      console.log(this.review.reviewText, this.review.reviewName);
    },
  },
};
</script>
<style>
.rating {
  direction: rtl;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
}
.rating input {
  display: none;
}
.rating label {
  color: #ddd;
  cursor: pointer;
}
.rating input:checked ~ label {
  color: #ffc107;
}
.rating label:hover,
.rating label:hover ~ label {
  color: #ffc107;
}
</style>
