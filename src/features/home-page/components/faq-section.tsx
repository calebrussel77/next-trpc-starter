import React, { type FC } from 'react';

import { Accordion } from '@/components/ui/accordion';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "It's the best investment?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

interface FaqSectionProps {
  className?: string;
}

const FaqSection: FC<FaqSectionProps> = ({}) => {
  return (
    <div className="w-full">
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map(faq => (
                <Accordion.Item key={faq.question} value={faq.question}>
                  <Accordion.Trigger>{faq.question}</Accordion.Trigger>
                  <Accordion.Content>{faq.answer}</Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion>
          </dl>
        </div>
      </div>
    </div>
  );
};

export { FaqSection };
