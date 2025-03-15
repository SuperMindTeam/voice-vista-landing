
import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, delay }) => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }
    
    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={testimonialRef}
      className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm transition-all duration-500 opacity-0 translate-y-10"
    >
      <Quote className="h-10 w-10 text-blue-100 mb-4" />
      <p className="text-gray-700 mb-6 leading-relaxed">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "Implementing the AI voice agent has completely transformed our customer support operations. Our response times have decreased by 80% and customer satisfaction scores are at an all-time high.",
      author: "Alexandra Chen",
      role: "Customer Experience Director",
      company: "Globex Retail",
      delay: 0
    },
    {
      quote: "The voice agent handled our Black Friday surge flawlessly. We were able to process three times our normal call volume without adding staff or compromising on service quality.",
      author: "Michael Torres",
      role: "COO",
      company: "ShopEasy",
      delay: 150
    },
    {
      quote: "What impressed me most was how quickly the AI adapted to our specific industry terminology. Within weeks, it was answering complex questions about our financial products with incredible accuracy.",
      author: "Sarah Johnson",
      role: "Digital Innovation Lead",
      company: "First Capital Bank",
      delay: 300
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 mb-4">
            <span className="text-xs font-medium">Customer Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Trusted by Innovative Businesses
          </h2>
          <p className="text-xl text-gray-600">
            See how companies are using our AI voice agent to transform their customer experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
