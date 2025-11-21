import AnimatedContent from "../utils/AnimatedContent";
import "../styles/global.css"

export default function FeaturesSection() {
  const features = [
    {
      img: "/feature-1.png",
      title: "Book now, pay later",
      text: "FREE cancellation on most rooms",
      delay: 0.6,
    },
    {
      img: "/feature-2.png",
      title: "300M+ reviews",
      text: "Trusted information from guests like you",
      delay: 0.8,
    },
    {
      img: "/feature-3.png",
      title: "2+ million assets",
      text: "Hotels, guest houses, apartments, and more…",
      delay: 1,
    },
  ];

  return (
    <div className="container text-center">
      <h1 className="fs-1 fw-semibold mt-3 mb-0 text-start">Why choose us?</h1>
      <div className="row text-center gap-4 m-3">
        {features.map((feature, idx) => (
          <div key={idx} className="col-md feature-card py-4 m-0">
            <AnimatedContent
              distance={30}
              direction="vertical"
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0}
              delay={feature.delay}>
              <img src={feature.img} className="feature-icon mb-3" alt={feature.title} />
              <div>
                <p className="fs-5 fw-bold mb-1">{feature.title}</p>
                <p className="fs-6 mb-0">{feature.text}</p>
              </div>
            </AnimatedContent>
          </div>
        ))}
      </div>
    </div>
  );
}
