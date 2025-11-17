import logoCornellSrc from "public/assets/logo-cornell.svg";
import logoColumbiaSrc from "public/assets/logo-columbia.svg";
import logoNortheasternSrc from "public/assets/logo-northeastern.svg";
import logoDropboxSrc from "public/assets/logo-dropbox.svg";
import logoGoogleSrc from "public/assets/logo-google.svg";
import logoAmazonSrc from "public/assets/logo-amazon.svg";
import Image from "next/image";

const LOGOS = [
  { src: logoCornellSrc, alt: "Cornell University logo" },
  { src: logoColumbiaSrc, alt: "Columbia University logo" },
  { src: logoNortheasternSrc, alt: "Northeastern University logo" },
  { src: logoDropboxSrc, alt: "Dropbox logo" },
  { src: logoGoogleSrc, alt: "Google logo" },
  { src: logoAmazonSrc, alt: "Amazon logo" },
];

// LogoCloud component showing trusted organizations
export const LogoCloud = () => (
  <section className="mt-14 lg:mt-10">
    <h2 className="text-center font-semibold text-gray-500 dark:text-gray-400 text-sm sm:text-base">
      Trusted by students and employees from top universities and companies
      worldwide
    </h2>
    <div className="mt-6 grid grid-cols-6 items-center justify-items-center gap-x-4 sm:gap-x-8 gap-y-10">
      {LOGOS.map(({ src, alt }, idx) => (
        <Image
          key={idx}
          className="col-span-3 h-full max-h-10 max-w-[130px] lg:col-span-1 lg:max-w-[160px] opacity-60 dark:opacity-50 hover:opacity-100 dark:hover:opacity-75 transition-opacity"
          src={src}
          alt={alt}
        />
      ))}
    </div>
  </section>
);
