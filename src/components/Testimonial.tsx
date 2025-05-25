import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  delay?: number;
}

const Testimonial = ({ quote, author, position, delay = 0 }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-6 relative"
    >
      <div className="text-4xl text-primary-300 absolute top-4 left-4">"</div>
      <div className="pt-6 pb-4">
        <p className="text-gray-700 italic">{quote}</p>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </motion.div>
  );
};

export default Testimonial;