import { host } from "@/configs/host";
import { stegaClean } from "next-sanity";

export default function (
  page: Sanity.PageBase,
  {
    base = true,
    params,
  }: {
    base?: boolean;
    params?: string;
  } = {}
) {
  // const segment = page._type === "blog.post" ? "blog" :
  //   page._type === "service.post" ? "service" :
  //     page._type === 'CaseReviewCategory' ? "case" :
  //       null
  let segment = null
  switch (page._type) {
    case "blog.post":
      segment = "blog"
      break
    case "service.post":
      segment = "service"
      break
    case "teams":
      segment = "team"
      break
    default:
      segment = null
  }



  const lang = page.language ?? "th";

  let slug = ''

  if (page.metadata?.slug?.current) {
    slug = page.metadata?.slug?.current
  }

  if (page.seo?.slug?.current) {
    slug = page.seo?.slug?.current
  }

  // const slug = page.metadata?.slug?.current;
  const path = slug === "index" ? null : slug;

  const data =
    (base ? host + "/" : "/") +
    lang +
    "/" +
    [segment, path, stegaClean(params)].filter(Boolean).join("/");


  return data;
}
