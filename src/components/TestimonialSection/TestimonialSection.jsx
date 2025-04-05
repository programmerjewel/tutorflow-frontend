import React from "react";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "TutorFlow helped me improve my Spanish in just 3 months! My tutor was amazing and tailored every lesson to my needs.",
      name: "Sarah K.",
      rating: 5,
      avatar: "https://i.ibb.co.com/Qv2wcpxB/Ellipse-3.png"
    },
    {
      quote:
        "I was struggling with math, but my tutor on TutorFlow made it so easy to understand. Highly recommend this platform!",
      name: "James L.",
      rating: 4.8,
      avatar: "https://i.ibb.co.com/491CDxg/Ellipse-5.png", // Updated with provided URL
    },
    {
      quote:
        "Learning French with TutorFlow has been a game-changer. The booking process is seamless, and the tutors are top-notch.",
      name: "Emily R.",
      rating: 5,
      avatar: "https://i.ibb.co.com/pvcR7MNh/Ellipse-4.png", // Updated with provided URL
    },
    {
      quote:
        "As a busy professional, I love how flexible TutorFlow is. I can learn Japanese at my own pace with an incredible tutor.",
      name: "Michael T.",
      rating: 4.9,
      avatar: "https://i.ibb.co.com/sdCZGjXg/Ellipse-2.png", // Updated with provided URL
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-base-content">
          What Our Learners Say
        </h2>
        <p className="text-lg text-center mb-12 text-base-content/80">
          Join thousands of happy students who’ve achieved their goals with
          TutorFlow.
        </p>
        <div className="overflow-hidden">
          <Marquee
            speed={40} gradient={false}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl mx-2 w-80 text-center border border-gray-200"
              >
                <p className="text-base-content/80 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-base-content">
                      {testimonial.name}
                    </h3>
                    <div className="rating rating-sm">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name={`rating-${index}`}
                          className="mask mask-star-2 bg-yellow-400"
                          checked={
                            Math.round(testimonial.rating) === i + 1
                              ? true
                              : false
                          }
                          readOnly
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;