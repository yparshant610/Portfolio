// components
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_z3vn72x',
        'template_xste2xb',
        form.current,
        'dyNyc-6oeVWisT00S'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setMessage('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setMessage('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => {
          setMessage('');
          setIsSuccess(null);
        }, 5000);
      });
  };
  return (
    <div className=" h-full bg-primary/30">
      <div className=" container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">Connect.</span>
          </motion.h2>
                    {message && (
            <div
              className={`p-4 mb-4 text-sm rounded-lg ${
                isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {message}
            </div>
          )}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
                            <input type="text" placeholder="name" name='user_name' className="input" required />
                            <input type="email" placeholder="email" name='user_email' className="input" required />
            </div>
                        <input type="text" placeholder="subject" name='subject' className="input" required />
                        <textarea placeholder="message" name='message' className="textarea" required></textarea>
                        <button type='submit' className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group" disabled={isSubmitting}>
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                {isSubmitting ? 'Sending...' : "Let's talk"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
