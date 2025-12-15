"use client";
import { useEffect } from "react";
import { useSetDefaultScale } from "components/Resume/hooks";
import {
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { usePDF } from "@react-pdf/renderer";
import dynamic from "next/dynamic";

const ResumeControlBar = ({
  scale,
  setScale,
  documentSize,
  document: pdfDocument,
  fileName,
}: {
  scale: number;
  setScale: (scale: number) => void;
  documentSize: string;
  document: JSX.Element;
  fileName: string;
}) => {
  const { scaleOnResize, setScaleOnResize } = useSetDefaultScale({
    setScale,
    documentSize,
  });

  const [instance, update] = usePDF({ document: pdfDocument });
  const isGenerating = instance.loading || !instance.url;

  // Hook to update pdf when document changes
  useEffect(() => {
    update();
  }, [update, pdfDocument]);

  const handleDownload = () => {
    if (!instance.url) return;

    // Create a temporary anchor to trigger the file download
    const link = window.document.createElement("a");
    link.href = instance.url;
    link.download = fileName;
    link.rel = "noopener noreferrer";
    link.click();
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 flex h-[var(--resume-control-bar-height)] items-center justify-center px-[var(--resume-padding)] text-gray-600 dark:text-gray-400 bg-gradient-to-b from-white/80 to-white dark:from-gray-800/80 dark:to-gray-900 backdrop-blur-sm lg:justify-between transition-colors duration-300">
      <div className="flex items-center gap-2">
        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        <input
          type="range"
          min={0.5}
          max={1.5}
          step={0.01}
          value={scale}
          onChange={(e) => {
            setScaleOnResize(false);
            setScale(Number(e.target.value));
          }}
          className="accent-blue-600 dark:accent-blue-500"
        />
        <div className="w-10">{`${Math.round(scale * 100)}%`}</div>
        <label className="hidden items-center gap-1 lg:flex">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 accent-blue-600 dark:accent-blue-500"
            checked={scaleOnResize}
            onChange={() => setScaleOnResize((prev) => !prev)}
          />
          <span className="select-none">Autoscale</span>
        </label>
      </div>
      <button
        type="button"
        onClick={handleDownload}
        disabled={isGenerating}
        className="ml-1 flex items-center gap-1 rounded-md border border-gray-300 dark:border-gray-600 px-3 py-0.5 lg:ml-8 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <ArrowDownTrayIcon className="h-4 w-4" />
        <span className="whitespace-nowrap">
          {isGenerating ? "Preparing..." : "Download Resume"}
        </span>
      </button>
    </div>
  );
};

/**
 * Load ResumeControlBar client side since it uses usePDF, which is a web specific API
 */
export const ResumeControlBarCSR = dynamic(
  () => Promise.resolve(ResumeControlBar),
  {
    ssr: false,
  }
);

export const ResumeControlBarBorder = () => (
  <div className="absolute bottom-[var(--resume-control-bar-height)] w-full border-t-2 border-gray-200 dark:border-gray-700 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent" />
);
