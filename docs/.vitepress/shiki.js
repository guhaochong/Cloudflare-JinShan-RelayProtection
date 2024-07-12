// .vitepress/shiki.js
import { getHighlighter } from 'shiki';

let highlighter;

export async function getSingletonHighlighter() {
  if (!highlighter) {
    highlighter = await getHighlighter({ theme: 'nord' });
  }
  return highlighter;
}
