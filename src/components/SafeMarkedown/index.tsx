import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
  markedown: string;
};

export function SafeMarkdown({ markedown }: SafeMarkdownProps) {
  return (
    <div>
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markedown}
      </ReactMarkdown>
    </div>
  );
}
