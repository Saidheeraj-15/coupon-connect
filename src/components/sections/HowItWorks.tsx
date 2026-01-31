import { motion } from "framer-motion";
import { Upload, Search, RefreshCw, Wallet } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload your unused coupon",
    description: "Snap a photo or enter your coupon code. We'll verify it instantly.",
  },
  {
    icon: Search,
    title: "Discover deals you want",
    description: "Browse through thousands of coupons from real users near you.",
  },
  {
    icon: RefreshCw,
    title: "Trade instantly with real users",
    description: "Match with someone who wants your coupon. Swap in seconds.",
  },
  {
    icon: Wallet,
    title: "Save money effortlessly",
    description: "Use your new coupons and keep more money in your pocket.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to turn unused coupons into real savings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative bg-background rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-soft">
                  {index + 1}
                </div>

                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-soft">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
