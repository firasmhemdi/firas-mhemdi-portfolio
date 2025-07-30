import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_zl70qru", // remplace par ton service ID
        "template_rq70fw3", // remplace par ton template ID
        formRef.current,
        "2nNmNUBJPrfB-FRRw" // remplace par ton user ID (public key)
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out. I'll reply soon.",
          });
          setIsSubmitting(false);
          formRef.current.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Sorry, something went wrong. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Contact <span className="text-blue-700">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Looking to discuss opportunities or projects? I'd be happy to connect - reach out via the form or my social networks.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <a
            href="mailto:firasmhemdi666@gmail.com"
            className="group p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            title="Email"
            aria-label="Send an email"
          >
            <Mail
              size={24}
              className="text-blue-700 group-hover:scale-110 transition-transform duration-300"
            />
          </a>
          
          <a
            href="https://linkedin.com/in/firas-mhemdi-730260255"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            title="LinkedIn"
            aria-label="View LinkedIn profile"
          >
            <Linkedin
              size={24}
              className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
            />
          </a>
          
          <a
            href="https://x.com/firas_mhem64137"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            title="Twitter"
            aria-label="View Twitter profile"
          >
            <Twitter
              size={24}
              className="text-blue-400 group-hover:scale-110 transition-transform duration-300"
            />
          </a>
          
          <a
            href="tel:+21627692047"
            className="group p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            title="Phone"
            aria-label="Call me"
          >
            <Phone
              size={24}
              className="text-green-600 group-hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label 
                  htmlFor="name" 
                  className="block text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200"
                >
                  Full Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={50}
                  className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="e.g. Firas Mhemdi"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="block text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200"
                >
                  Email Address <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="e.g. firas@email.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2 mb-6 lg:mb-8">
              <label 
                htmlFor="subject" 
                className="block text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200"
              >
                Subject <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                minLength={3}
                maxLength={100}
                className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="e.g. Project collaboration, Job offer, Question..."
              />
            </div>

            {/* Message */}
            <div className="space-y-2 mb-8">
              <label 
                htmlFor="message" 
                className="block text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200"
              >
                Message <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={6}
                className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Please describe your request or question in detail so I can respond as efficiently as possible..."
              />
            </div>

            {/* Bouton d'envoi */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-3 px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 ${
                  isSubmitting 
                    ? "opacity-60 cursor-not-allowed transform-none" 
                    : "hover:shadow-xl"
                } min-w-[160px] sm:min-w-[180px]`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};