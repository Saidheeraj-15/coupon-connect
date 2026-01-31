import { motion } from "framer-motion";
import { Sparkles, Target, Shield, CheckCircle, Users } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Never waste a coupon again",
    description: "Every coupon has value. Turn the ones you won't use into ones you will.",
  },
  {
    icon: Target,
    title: "Get deals tailored to you",
    description: "Our AI learns your preferences and recommends perfect trades.",
  },
  {
    icon: Shield,
    title: "Safe, verified exchanges",
    description: "Every user is verified. Every trade is protected.",
  },
  {
    icon: CheckCircle,
    title: "Built-in validity screening",
    description: "We automatically check expiration dates and coupon validity.",
  },
  {
    icon: Users,
    title: "Social and fun to use",
    description: "Join a community of smart savers. Chat, rate, and connect.",
  },
];

const WhyUse = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Use <span className="text-primary">CouponSwap</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of smart savers who are getting more from every deal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUse;
