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
      className="py-24 px-4 relative bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:bg-gray-950"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
          Contact <span className="text-blue-700">Me</span>
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Want to collaborate or just say hi? Fill out the form or connect with
          me on social media.
        </p>

        <div className="flex flex-col gap-8">
          {/* Socials */}
          <div className="flex justify-center gap-6 mb-2">
            <a
                href="mailto:firasmhemdi666@gmail.com"
              className="group"
              title="Email"
            >
              <Mail
                size={26}
                className="text-blue-700 group-hover:scale-110 transition"
              />
            </a>
            <a
              href="https://linkedin.com/in/firas-mhemdi-730260255"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title="LinkedIn"
            >
              <Linkedin
                size={26}
                className="text-blue-600 group-hover:scale-110 transition"
              />
            </a>
            <a
              href="https://x.com/firas_mhem64137"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title="Twitter"
            >
              <Twitter
                size={26}
                className="text-blue-400 group-hover:scale-110 transition"
              />
            </a>
           
            <a
              href="tel:27692047"
              className="group"
              title="Phone"
            >
              <Phone
                size={26}
                className="text-gray-500 group-hover:scale-110 transition"
              />
            </a>
          </div>

          {/* Contact Card */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg p-8 flex flex-col gap-6 mx-auto w-full max-w-xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={50}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="e.g. John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="e.g. john@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject <span className="text-gray-400">(optional)</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                minLength={3}
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="e.g. Project collaboration, Job offer, Question..."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                placeholder="Please describe your request or question in detail so I can respond as efficiently as possible."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition ${
                isSubmitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
