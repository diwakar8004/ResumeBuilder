"use client";
import { getHasUsedAppBefore } from "lib/redux/local-storage";
import { ResumeDropzone } from "components/ResumeDropzone";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ImportResume() {
  const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
  const [hasAddedResume, setHasAddedResume] = useState(false);
  const onFileUrlChange = (fileUrl: string) => {
    setHasAddedResume(Boolean(fileUrl));
  };

  useEffect(() => {
    setHasUsedAppBefore(getHasUsedAppBefore());
  }, []);

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 min-h-screen">
      <div className="mx-auto mt-10 sm:mt-14 max-w-3xl rounded-md border border-gray-200 dark:border-gray-700 px-6 sm:px-10 py-10 text-center shadow-md dark:shadow-lg dark:shadow-gray-950 bg-white dark:bg-gray-800 transition-all duration-300">
        {!hasUsedAppBefore ? (
          <>
            <h1 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
              Import data from an existing resume
            </h1>
            <ResumeDropzone
              onFileUrlChange={onFileUrlChange}
              className="mt-5"
            />
            {!hasAddedResume && (
              <>
                <OrDivider />
                <SectionWithHeadingAndCreateButton
                  heading="Don't have a resume yet?"
                  buttonText="Create from scratch"
                />
              </>
            )}
          </>
        ) : (
          <>
            {!hasAddedResume && (
              <>
                <SectionWithHeadingAndCreateButton
                  heading="You have data saved in browser from prior session"
                  buttonText="Continue where I left off"
                />
                <OrDivider />
              </>
            )}
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Override data with a new resume
            </h1>
            <ResumeDropzone
              onFileUrlChange={onFileUrlChange}
              className="mt-5"
            />
          </>
        )}
      </div>
    </main>
  );
}

const OrDivider = () => (
  <div className="mx-[-2.5rem] flex items-center pb-6 pt-8" aria-hidden="true">
    <div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
    <span className="mx-2 mt-[-2px] flex-shrink text-lg text-gray-400 dark:text-gray-500">or</span>
    <div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
  </div>
);

const SectionWithHeadingAndCreateButton = ({
  heading,
  buttonText,
}: {
  heading: string;
  buttonText: string;
}) => {
  return (
    <>
      <p className="font-semibold text-gray-900 dark:text-gray-100">{heading}</p>
      <div className="mt-5">
        <Link
          href="/resume-builder"
          className="outline-theme-blue rounded-full bg-sky-500 dark:bg-sky-600 px-6 pb-2 pt-1.5 text-base font-semibold text-white hover:bg-sky-600 dark:hover:bg-sky-700 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
};
