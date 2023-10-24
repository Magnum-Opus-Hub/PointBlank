import { Disclosure } from '@headlessui/react';
import Head from 'next/head';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const faqs = [
  {
    question: "What is the Enterprise plan?",
    answer: "The Enterprise plan is designed for those who need one-time support, are unsure about a subscription model, or are looking for something more malleable to fit their unique needs."
  },
  {
    question: "Is there a request limit?",
    answer: "No, there are no limits to how many design and software development requests you can add. We complete them one by one. For those requiring custom limits, we can accommodate this."
  },
  {
    question: "How fast are requests completed?",
    answer: "On average, most design and software development requests are completed within two days or less. If you have specific time constraints or require expedited delivery, we can work with you to meet those needs."
  },
  {
    question: "What does the onboarding process look like?",
    answer: "After you subscribe, you'll receive an email with a link to your Trello board and Stripe customer portal. If you require a more tailored onboarding experience, we can provide that as well."
  },
  {
    question: "How do we communicate?",
    answer: "We primarily communicate using Trello and occasional Slack interactions. Meetings can be arranged for clients with unique or urgent communication needs."
  },
  {
    question: "How does the pausing subscription work?",
    answer: "Billing cycles are based on 31 days. If you have unique billing needs or require a different structure, we can accommodate that."
  },
  {
    question: "What is your refund policy?",
    answer: "No refunds are available. However, if you're unsatisfied, we'll do our best to resolve the issue. Special considerations can be made on a case-by-case basis."
  },
  {
    question: "What types of design and software development requests can I make?",
    answer: "You can request anything from logo designs and marketing materials to full-stack web development and mobile app creation. Our team specializes in graphic design, UI/UX, and various programming languages to fulfill a wide range of design and development needs."
  },
  {
    question: "Can I request revisions?",
    answer: "Yes, you can request unlimited revisions until you're 100% satisfied. We believe in delivering quality work that meets your expectations."
  },
  {
    question: "What happens if I need to scale up my requests?",
    answer: "Our service is flexible and can be scaled to meet your specific requirements."
  },
  {
    question: "Who owns the rights to the work?",
    answer: "You do. All designs and software solutions are 100% yours."
  },
  {
    question: "Who owns purchasable assets?",
    answer: "You're responsible for purchasing any additional assets. Once purchased, you will own these assets."
  },
  {
    question: "How do you ensure quality?",
    answer: "All work goes through multiple rounds of review and testing. Custom quality assurance processes can be arranged."
  },
  {
    question: "Do you offer post-delivery support?",
    answer: "Yes, fostering long-term relationships is important to us, and that's why we offer ongoing support and maintenance even after your project is complete. From updates and troubleshooting to further enhancements, we've got your back."
  }
];


export default function Faq() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="text-center">
      <Head>
        {/* Existing Head content */}
      </Head>
      <div className="mx-auto max-w-7xl px-6 sm:py-7 lg:px-8">
        <div className="mx-auto max-w-5xl text-pearl-white">
          <motion.h2
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="md:text-5xl text-4xl font-bold text-sugar-chic font-grandir-italic"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
          <dl className="text-[22px] text-pearl-white">
            {faqs.map((faq, index) => (
              <motion.div
                ref={index === 0 ? ref : null}
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={faq.question}
                className="pt-6 hover-pulse text-center"
              >
                <Disclosure as="div" className="hover-pulse text-center">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="text-pearl-white font-telegraf">
                          {faq.question}
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2">
                        <p className="text-base text-[22px] leading-7 text-pedestrian-lemon font-telegraf-slanted">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}