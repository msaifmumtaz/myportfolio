import type { ComponentProps } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

// Wide tables scroll inside their own box instead of widening the page on phones.
const components = { table: (props: ComponentProps<"table">) => <div className="table-scroll"><table {...props} /></div> };

// GFM adds tables and task lists, which the guides use.
export function Markdown({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />;
}
