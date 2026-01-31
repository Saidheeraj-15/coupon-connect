import { motion } from "framer-motion";
import { ShieldCheck, Ban, Award, Scan } from "lucide-react";

const trustPoints = [
  {
    icon: Scan,
    title: "Automatic Validation",
    description: "Every coupon is scanned and verified before it can be listed.",
  },
  {
    icon: Ban,
    title: "Expired Coupons Blocked",
    description: "Our system automatically detects and blocks expired or used codes.",
  },
  {
    icon: Award,
    title: "User Reputation System",
    description: "Traders earn ratings. High-rated users get verified badges.",
  },
  {
    icon: ShieldCheck,
    title: "Dispute Protection",
    description: "If something goes wrong, our team has your back with fair resolution.",
  },
];

const Trust = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Verified & Trusted
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trade with <span className="text-primary">Confidence</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              We take trust seriously. Every coupon, every user, and every trade
              goes through our verification system. No scams, no surprises—just
              real savings.
            </p>

            <div className="space-y-4">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
              {/* Decorative card */}
              <div className="bg-card rounded-2xl p-6 shadow-elevated">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Verification Complete</p>
                    <p className="text-sm text-muted-foreground">Coupon is valid and ready to trade</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Expiration Check</span>
                    <span className="text-sm font-medium text-primary">✓ Valid</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Code Format</span>
                    <span className="text-sm font-medium text-primary">✓ Verified</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Usage Status</span>
                    <span className="text-sm font-medium text-primary">✓ Unused</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Store Validation</span>
                    <span className="text-sm font-medium text-primary">✓ Accepted</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-card px-4 py-2 rounded-full shadow-card flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Verified Seller</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
