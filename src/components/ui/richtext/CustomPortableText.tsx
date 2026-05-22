import AnchoredHeading from "@/components/ui/richtext/AnchoredHeading";
import HorizontalContent from "@/components/ui/richtext/HorizontalContent";
import Image from "@/components/ui/richtext/Image";
import processUrl from "@/sanity/lib/processUrl";
import { NextPage } from "next";
import { PortableText, stegaClean } from "next-sanity";
import Link from "next/link";
import { PortableTextBlock } from "sanity";
interface Props {
  value: PortableTextBlock[];
}

const CustomPortableText: NextPage<Props> = ({ value }) => {
  return (
    <PortableText
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

          "horizontal.content": ({ value }) => {
            return <HorizontalContent {...value} />;
          },
          customTable: ({ value }) => {
            if (!value?.rows || value.rows.length === 0) return null;

            // แยกแถวแรกออกมาทำเป็น Table Header (Optional)
            const [headerRow, ...bodyRows] = value.rows;

            return (
              <div className="overflow-x-auto my-6">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 text-left text-sm">
                  {headerRow && (
                    <thead className="bg-gray-50">
                      <tr>
                        {headerRow.cells?.map((cell: string, index: number) => (
                          <th
                            key={index}
                            className="px-4 py-3 font-semibold text-gray-900 border-b"
                          >
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {bodyRows.map((row: any, rowIndex: number) => (
                      <tr key={rowIndex} className="hover:bg-gray-50">
                        {row.cells?.map((cell: string, cellIndex: number) => (
                          <td
                            key={cellIndex}
                            className="px-4 py-3 text-gray-700 border-b"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          },
        },
        marks: {
          left: ({ children }) => (
            <span className="[&>*]:text-left grid w-full">{children}</span>
          ),
          center: ({ children }) => (
            <span className="[&>*]:text-center text-center grid w-full">
              {children}
            </span>
          ),
          right: ({ children }) => (
            <span className="[&>*]:text-right   grid w-full">{children}</span>
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
                  className="is-external"
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
    />
  );
};

export default CustomPortableText;
