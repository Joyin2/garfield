import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-primary-100 group relative overflow-hidden h-full"
    >
      {/* Decorative background gradient */}
      <div className="absolute -top-24 -right-24 w-40 h-40 bg-primary-50 rounded-full opacity-70 transition-transform duration-500 group-hover:scale-150"></div>
      
      {/* Icon with enhanced styling */}
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 shadow-md group-hover:bg-primary-100 transition-colors duration-300">
          <div className="text-3xl">{icon}</div>
        </div>
      </div>
      
      {/* Title with better contrast */}
      <h3 className="text-2xl font-bold mb-4 text-primary-800 relative z-10">{title}</h3>
      
      {/* Divider */}
      <div className="h-1 w-16 bg-primary-300 mb-4 rounded-full group-hover:w-24 transition-all duration-300"></div>
      
      {/* Description with improved readability */}
      <p className="text-gray-700 leading-relaxed relative z-10">{description}</p>
      
      {/* Learn more button */}
      <div className="mt-6 relative z-10">
        <button className="text-primary-600 font-medium flex items-center group-hover:text-primary-700 transition-colors duration-300">
          Learn more
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;