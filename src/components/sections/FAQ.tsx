import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What coupons are allowed?",
    answer: "We accept most retail, grocery, restaurant, and service coupons. Digital codes, printable coupons, and store-specific offers are all welcome. We don't allow coupons that are single-use, already expired, or restricted to specific accounts.",
  },
  {
    question: "How are coupon codes protected?",
    answer: "Coupon codes are masked and encrypted until a trade is confirmed by both parties. This means no one can see your code until you've agreed to the exchange. Our secure system prevents any unauthorized access.",
  },
  {
    question: "How do trades work?",
    answer: "It's simple! List your coupon, browse available offers, and propose a trade. Once both users agree, codes are revealed simultaneously. You can also chat with other users to negotiate before finalizing.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes! CouponSwap is completely free to use. We believe in helping everyone save money. Premium features like priority matching and advanced analytics may be available in the future for power users.",
  },
  {
    question: "What if a coupon doesn't work?",
    answer: "Our verification system catches most issues, but if a coupon fails, report it immediately. We'll investigate and, if the issue is confirmed, help resolve the dispute fairly. Repeat offenders are banned from the platform.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
