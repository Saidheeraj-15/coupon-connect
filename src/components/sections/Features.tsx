import { motion } from "framer-motion";
import {
  Wallet,
  Brain,
  MessageCircle,
  Star,
  Bell,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Smart Coupon Wallet",
    description: "Organize all your coupons in one beautiful, easy-to-use digital wallet.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our intelligent system recommends perfect trades based on your preferences.",
    color: "accent",
  },
  {
    icon: MessageCircle,
    title: "In-App Chat",
    description: "Communicate directly with other users to negotiate and finalize trades.",
    color: "primary",
  },
  {
    icon: Star,
    title: "Community Ratings",
    description: "Build trust through our verified rating system. Trade with confidence.",
    color: "accent",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Never miss a match. Get instant alerts when someone wants your coupon.",
    color: "primary",
  },
  {
    icon: Lock,
    title: "Secure Code Masking",
    description: "Coupon codes stay hidden until the trade is confirmed. Total protection.",
    color: "accent",
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to trade smarter and save more
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity ${
                  feature.color === "accent" ? "bg-accent" : "bg-primary"
                }`}
              />

              <div
                className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  feature.color === "accent"
                    ? "gradient-accent"
                    : "gradient-primary"
                } shadow-soft`}
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="relative text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
