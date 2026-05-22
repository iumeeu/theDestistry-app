import CustomPortableText from "@/components/ui/richtext/CustomPortableText";
import { cn } from "@/utils";

export default function Content({
  value,
  className,
  children,
}: { value: any } & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "richtext mx-auto w-full !space-y-[1em] [&>:first-child]:!mt-0",
        className,
      )}
    >
      <CustomPortableText value={value} />
      {/* <PortableText
        value={value}
        components={{
          block: {
            h2: (node) => <AnchoredHeading as="h2" {...node} />,
            h3: (node) => <AnchoredHeading as="h3" {...node} />,
            h4: (node) => <AnchoredHeading as="h4" {...node} />,
            h5: (node) => <AnchoredHeading as="h5" {...node} />,
            h6: (node) => <AnchoredHeading as="h6" {...node} />,
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 pl-4">
                <p>{children}</p>
              </blockquote>
            ),
          },
          types: {
            image: Image,
            // code: Code,
            "custom-html": ({ value }) => (
              <CustomHTML
                className="has-[table]:md:mx-auto has-[table]:md:[grid-column:bleed]"
                {...value}
              />
            ),
          },
          marks: {
            left: ({ children }) => (
              <div className="text-left">{children}</div>
            ),
            center: ({ children }) => (
              <div className="text-center">{children}</div>
            ),
            right: ({ children }) => (
              <div className="text-right">{children}</div>
            ),
            textColor: ({ children, value }) => (
              <span className="not-prose" style={{ color: value.value }}>
                {children}
              </span>
            ),
            highlightColor: ({ children, value }) => (
              <span className="not-prose" style={{ background: value.value }}>
                {children}
              </span>
            ),
            customLink: ({ value, children }) => {
              if (value.type === "internal" && value.internal) {
                return (
                  <Link
                    href={processUrl(value.internal, {
                      base: false,
                      params: value.params,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </Link>
                );
              }

              if (value.type === "external" && value.external) {
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={stegaClean(value.external)}
                  >
                    {children}
                  </a>
                );
              }
            },
          },
        }}
      /> */}

      {children}
    </div>
  );
}
