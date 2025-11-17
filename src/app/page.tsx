import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import { Features } from "home/Features";
import { Testimonials } from "home/Testimonials";
import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="mx-auto max-w-screen-2xl px-8 lg:px-12">
        <Hero />
        <Steps />
        <Features />
        <Testimonials />
        <QuestionsAndAnswers />
      </div>
    </main>
  );
}
