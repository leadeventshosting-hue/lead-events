import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({ children, variant = 'primary', to, href, className, onClick, ...props }) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-bold tracking-wide transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-brand-darkRed shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(230,57,70,0.6)]",
    secondary: "bg-transparent text-white border border-white/20 hover:border-brand-red hover:bg-brand-red/10",
    outline: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
  };

  const classes = cn(baseStyles, variants[variant], className);

  const innerContent = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  if (to) {
    return (
      <Link to={to} className={classes} onClick={(e) => e.preventDefault()} {...props}>
        <motion.div {...motionProps} className="w-full h-full flex items-center justify-center">
          {innerContent}
        </motion.div>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={(e) => e.preventDefault()} {...props}>
        <motion.div {...motionProps} className="w-full h-full flex items-center justify-center">
          {innerContent}
        </motion.div>
      </a>
    );
  }

  return (
    <motion.button className={classes} onClick={onClick} {...motionProps} {...props}>
      {innerContent}
    </motion.button>
  );
}
