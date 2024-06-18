import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';

type MarkdownProps = {
  content: string;
};

// Helper function to convert LaTeX-style links to HTML
const latexToHtml = (content: string) => {
    return content.replace(/\\href{([^}]+)}{([^}]+)}/g, '<a href="$2" target="_blank">$1</a>');
  };
    
const MarkdownWithMath = ({ content }: MarkdownProps) => {  
    const processedContent = latexToHtml(content);

    return (
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
      >
        {processedContent}
      </ReactMarkdown>
    );
  };
    
  export default MarkdownWithMath;
