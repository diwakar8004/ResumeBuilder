import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Free Forever",
    text: "ResumeBuilder is created with the belief that everyone should have free and easy access to a modern professional resume design",
  },
  {
    src: featureUSSrc,
    title: "U.S. Best Practices",
    text: "ResumeBuilder has built-in best practices for the U.S. job market and works well with top ATS platforms such as Greenhouse and Lever",
  },
  {
    src: featurePrivacySrc,
    title: "Privacy Focus",
    text: "ResumeBuilder stores data locally in your browser so only you have access to your data and with complete control",
  },
  {
    src: featureOpenSourceSrc,
    title: "Open-Source",
    text: (
      <>
        ResumeBuilder is an open-source project, and its source code can be viewed
        by anyone on its{" "}
        <Link href="https://github.com/diwakar8004/ResumeBuilder">
          GitHub repository
        </Link>
      </>
    ),
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-36 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="mx-auto lg:max-w-4xl px-4">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Why Choose ResumeBuilder?
        </h2>
        <dl className="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
          {FEATURES.map(({ src, title, text }) => (
            <div className="px-2" key={title}>
              <div className="relative w-96 self-center pl-16 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-lg dark:shadow-gray-950 hover:shadow-lg dark:hover:shadow-gray-900 transition-all duration-300">
                <dt className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  <Image
                    src={src}
                    className="absolute left-0 top-1 h-12 w-12"
                    alt="Feature icon"
                  />
                  {title}
                </dt>
                <dd className="mt-2 text-gray-700 dark:text-gray-300">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
