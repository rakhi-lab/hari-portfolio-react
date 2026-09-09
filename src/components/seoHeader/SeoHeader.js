import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  let sameAs = [];
  if (Array.isArray(socialMediaLinks)) {
    socialMediaLinks
      .filter(
        (media) =>
          media?.link &&
          !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
      )
      .forEach((media) => {
        sameAs.push(media.link);
      });
  }

  let mailMedia = Array.isArray(socialMediaLinks)
    ? socialMediaLinks.find((media) => media?.link?.startsWith("mailto"))
    : null;
  let mail = mailMedia ? mailMedia.link.substring("mailto:".length) : "";

  let job = experience?.sections
    ?.find((section) => section?.work)
    ?.experiences?.[0];

  let credentials = [];
  if (Array.isArray(certifications?.certifications)) {
    certifications.certifications.forEach((certification) => {
      if (certification) {
        credentials.push({
          "@context": "https://schema.org",
          "@type": "EducationalOccupationalCredential",
          url: certification.certificate_link,
          name: certification.title,
          description: certification.subtitle,
        });
      }
    });
  }

  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting?.title || "Portfolio",
    url: seo?.og?.url || "",
    email: mail,
    telephone: contactPageData?.phoneSection?.subtitle || "",
    sameAs: sameAs,
    jobTitle: job?.title || greeting?.nickname || "",
    worksFor: job?.company
      ? {
          "@type": "Organization",
          name: job.company,
        }
      : undefined,
    address: contactPageData?.addressSection
      ? {
          "@type": "PostalAddress",
          addressLocality: contactPageData.addressSection?.locality,
          addressRegion: contactPageData.addressSection?.region,
          addressCountry: contactPageData.addressSection?.country,
          postalCode: contactPageData.addressSection?.postalCode,
          streetAddress: contactPageData.addressSection?.streetAddress,
        }
      : undefined,
    hasCredential: credentials.length > 0 ? credentials : undefined,
  };

  return (
    <Helmet>
      <title>{seo?.title || greeting?.title || "Portfolio"}</title>
      <meta name="description" content={seo?.description || ""} />
      <meta property="og:title" content={seo?.og?.title || seo?.title || ""} />
      <meta property="og:type" content={seo?.og?.type || "website"} />
      <meta property="og:url" content={seo?.og?.url || ""} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
