"use client";

import React from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Faq = () => {
  return (
    <>
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </>
  );
};

const faqs = [
  {
    question:
      "What do I need to set up the display for my mosque or community centre?",
    answer:
      "All you need is a display or TV with an internet connection. Our service takes care of the rest!",
  },
  {
    question: "How do I get started with your service?",
    answer:
      "Getting started is easy! Just visit our website and sign up for a free account. You'll gain access to our website builder and mosque display software.",
  },
  {
    question:
      "Do I need any technical skills to use your website builder and mosque display software?",
    answer:
      "Not at all! Our tools are designed to be user-friendly, requiring no coding or technical expertise. You can easily create and manage content.",
  },
  {
    question: "Can I update content in real-time?",
    answer:
      "Absolutely! You can manage your website and display content in real time. If there's an upcoming event or an important announcement, you can easily add it and have it displayed instantly.",
  },
  {
    question: "What kind of content can I share using your service?",
    answer:
      "You can share a wide range of content, including event schedules, sermons, community news, photos, videos, and more. The possibilities are endless!",
  },
  {
    question: "How does your service help in connecting with the community?",
    answer:
      "Our service enhances community engagement by providing a visually appealing platform to share religious insights, community updates, and important news, fostering a sense of togetherness.",
  },
  {
    question: "Is your service really free?",
    answer:
      "Yes, our basic service, including the website builder and mosque display software, is absolutely free. We offer premium features for those who want bespoke/advanced options.",
  },
  {
    question:
      "Can I customise the design of the website for my mosque or community centre?",
    answer:
      "Absolutely! Our website builder offers customisation options, allowing you to choose colours, fonts, layouts, and images that reflect the unique identity of your mosque or community centre.",
  },
  {
    question: "What if I need help while using the service?",
    answer:
      "We're here to support you every step of the way. Our customer support team is available to assist you with any questions or concerns you might have.",
  },
  {
    question:
      "Is the mosque display software compatible with different types of screens and devices?",
    answer:
      "Our mosque display software is designed to be compatible with a variety of screens and devices, making it versatile for different setups.",
  },
  {
    question:
      "Are there templates available to help me get started with designing the website?",
    answer:
      "Yes, we offer a range of templates that you can use as a starting point. These templates are customisable, making it even easier to create a stunning website for your mosque or community centre.",
  },
  {
    question: "How do I keep the content fresh and engaging for the community?",
    answer:
      "Regularly update your portal and display content with the latest news, upcoming events, inspirational messages, and community stories. This keeps your community engaged and excited to interact with the display.",
  },
  {
    question: "Can I integrate social media accounts with the website?",
    answer:
      "Yes, you can integrate your mosque or community centre's social media accounts into the website, allowing for seamless cross-promotion and interaction.",
  },
];

export default Faq;
