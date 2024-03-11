import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";

const Faq = () => {

  // These are the links of the faq's
  const faqs = [
    {
      faq: "Is this donation tax deductible?",
      link: "/is-this-donation-tax-deductible",
    },
    {
      faq: "How do I give by check?",
      link: "/how-do-i-give-by-check",
    },
    {
      faq: "Do you accept employee matching gifts?",
      link: "/do-you-accept-employee-matching-gifts",
    },
    {
      faq: "Can I donate stock or make my donation by wire transfer?",
      link: "/can-i-donate-stock-or-make-my-donation-by-wire-transfer",
    },
    {
      faq: "Do you accept cryptocurrency donations?",
      link: "/do-you-accept-cryptocurrency-donations",
    },
    {
      faq: "Can I donate in a currency other than US dollars?",
      link: "/can-i-donate-in-a-currency-other-than-us-dollars",
    },
    {
      faq: "How do I manage my recurring donation?",
      link: "/how-do-i-manage-my-recurring-donation",
    },
    {
      faq: "How do I edit or cancel my recurring donation?",
      link: "/how-do-i-edit-or-cancel-my-recurring-donation",
    },
    {
      faq: "Do you have an annual report?",
      link: "/do-you-have-an-annual-report",
    },
    {
      faq: "What is the Learner's Fund?",
      link: "/what-is-the-learners-fund",
    },
    {
      faq: "I have a question about my donation or financially supporting Uniford?",
      link: "/i-have-a-question-about-my-donation-or-financially-supporting-uniford",
    },
    {
      faq: "Is there someone I can talk to if I am interested in becoming a corporate partner?",
      link: "/is-there-someone-i-can-talk-to-if-i-am-interested-in-becoming-a-corporate-partner",
    },
    {
      faq: "Can I talk to someone on the phone?",
      link: "/can-i-talk-to-someone-on-the-phone",
    },
  ];
  
  return (
    <section className="bg-[#ffffff] rounded-3xl tablet:rounded-xl px-5 py-5 flex flex-col w-full min-w-[312px] tablet:w-[349px] max-h-[662px] h-[662px]">
      <h3 className="tablet:text-4xl text-4 font-semibold">FAQ&apos;s</h3>
      <div className="my-3">
        <ul className="flex flex-col gap-1">
          {faqs.map((faq, index) => (
            <li key={index} className="my-2 flex items-center cursor-pointer">
              <div className="flex items-center justify-center">
                <GoDotFill className="me-2 h-2" />
              </div>
              <Link href={faq.link} className="text-[#000000] transition-all ease-in-out duration-150 text-xs hover:scale-[1.02]">
                {faq.faq}
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="text-sm my-6">Have an account ? <span className="text-[#40C640]">Sign in</span></h3>
      </div>
    </section>
  );
};

export default Faq;
