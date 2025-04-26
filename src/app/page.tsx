"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  ArrowRight,
  Package,
  Globe,
  UserCheck,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const featureAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export default function LandingPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure hydration completes
  useEffect(() => {
    setMounted(true);
  }, []);

  // Features data
  const features = [
    {
      icon: <Package className="h-12 w-12 text-brand-500" />,
      title: "Post Item Requests",
      description: "Create DropParcels detailing items you need delivered.",
    },
    {
      icon: <Globe className="h-12 w-12 text-brand-500" />,
      title: "Share Travel Plans",
      description: "Add your upcoming trips as GlidePaths to earn extra money.",
    },
    {
      icon: <UserCheck className="h-12 w-12 text-brand-500" />,
      title: "Smart Matching",
      description:
        "Our algorithm connects the perfect Carriers with Requesters.",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-brand-500" />,
      title: "Real-time Chat",
      description: "Communicate easily through our LinkLine messaging system.",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Peer-Cargo Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-brand-700 dark:text-brand-400">
              Peer-Cargo
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <div className="space-x-2">
              <Link href="/sign-in">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 background-gradient dark:background-gradient-dark">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="flex-1"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                <span className="text-gradient">Turn Trips </span>
                <br />
                <span className="text-gradient">into Tips!</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-md">
                Connect with travelers heading your way. Send items across
                cities and countries through a trusted network of peers.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Learn how it works
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 relative"
              initial="initial"
              animate="animate"
              variants={pulse}
            >
              <Image
                src="/images/hero-illustration.svg"
                alt="Peer Cargo Illustration"
                width={600}
                height={500}
                className="max-w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
        id="how-it-works"
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              How Peer-Cargo Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our platform connects travelers with extra space to people who
              need items delivered.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                variants={featureAnimation}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 background-gradient dark:background-gradient-dark">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-10">
              Join thousands of users already sending and carrying items across
              the globe.
            </p>
            <Link href="/sign-up">
              <Button size="lg" className="px-8">
                Sign up now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Image
                src="/images/logo.png"
                alt="Peer-Cargo Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-lg font-bold text-brand-700 dark:text-brand-400">
                Peer-Cargo
              </span>
            </div>

            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-brand-600"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-brand-600"
              >
                Terms
              </Link>
              <Link
                href="/support"
                className="text-gray-600 dark:text-gray-400 hover:text-brand-600"
              >
                PeerAid Support
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Peer-Cargo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
