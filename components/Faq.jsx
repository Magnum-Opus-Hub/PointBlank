import { Disclosure } from '@headlessui/react';
import Head from 'next/head';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const faqs = [
  {
    question: "Is there a request limit?",
    answer: "No, there are no limits to how many design and software development requests you can add. We will complete them one by one."
  },
  {
    question: "How fast are requests completed?",
    answer: "On average, most design and software development requests are completed within two days or less. More complex requests can take longer and are typically broken down into smaller ones."
  },
  {
    question: "What does the onboarding process look like?",
    answer: "After you subscribe, you will receive an email with a link to your platform where you can add your requests and a link to your Stripe customer portal where you can manage your subscription. We will also invite you to your Slack channel, where your dedicated project manager can assist you."
  },
  {
    question: "How do we communicate?",
    answer: "We communicate using Trello and over Slack for occasional, general details to discuss. We do not do frequent meetings by default and use meetings only when there are urgent issues to resolve, and it's more efficient to clarify the details with a call."
  },
  {
    question: "How does the pausing subscription work?",
    answer: "Billing cycles are based on 31 days. For example, if you subscribe and use the service for ten days and then pause your subscription, the billing cycle will get paused, and you'll have 21 days of service remaining to be used anytime in the future."
  },
  {
    question: "What is your refund policy?",
    answer: "Unfortunately, there are no refunds. If you're unsatisfied with your subscription, please contact us; we'll do our best to resolve this."
  },
  {
    question: "What types of design and software development requests can I make?",
    answer: "You can make many requests, from graphic design and branding to web development and software engineering. Our team is skilled in various areas and can handle most design and software development requests."
  },
  {
    question: "Can I request revisions on the designs or software solutions?",
    answer: "Yes, you can request unlimited revisions until you're 100% satisfied. We believe in delivering quality work that meets your expectations."
  },
  {
    question: "What happens if I need to scale up my requests?",
    answer: "Our service is flexible and scalable. You can easily upgrade your subscription plan if you need to increase your requests. You can also scale down or pause your subscription at any time."
  },
  {
    question: "Who owns the rights to the designs and software solutions?",
    answer: "You do. All designs and software solutions we create for you are 100% yours. We provide native source files and code repositories for all completed work."
  },
  {
    question: "Who owns the purchasable assets like mockups and typefaces?",
    answer: "If there are assets such as mockups, typefaces, or other elements that need to be purchased for your project, you will be responsible for buying them. Once purchased, you will own these assets, but we will use them to complete your design or software development request. This ensures that you have full ownership and rights to all elements of the project."
  },
  {
    question: "How do you ensure the quality of your work?",
    answer: "We have a rigorous quality assurance process in place. All designs and software solutions go through multiple rounds of review and testing before they are delivered to you."
  },
  {
    question: "Do you offer support after the design or software solution is delivered?",
    answer: "We offer ongoing support and maintenance based on your chosen subscription plan. We're committed to ensuring your satisfaction even after the project is completed."
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