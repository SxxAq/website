import React from 'react';
import Head from 'next/head';
import StyledMarkdown from '~/components/StyledMarkdown';
import { getLayout } from '~/components/Sidebar';
import getStaticMarkdownPaths from '~/lib/getStaticMarkdownPaths';
import getStaticMarkdownProps from '~/lib/getStaticMarkdownProps';
import { Headline1 } from '~/components/Headlines';
import { DocsHelp } from '~/components/DocsHelp';
import { SectionContext } from '~/context';
import NextPrevButton from '~/components/NavigationButtons';

export async function getStaticPaths() {
  return getStaticMarkdownPaths('pages/understanding-json-schema');
}
export async function getStaticProps(args: any) {
  return getStaticMarkdownProps(args, 'pages/understanding-json-schema');
}

export default function StaticMarkdownPage({
  frontmatter,
  content,
}: {
  frontmatter: any;
  content: any;
}) {
  const fileRenderType = '_md';
  const newTitle = 'JSON Schema - ' + frontmatter.title;
  return (
    <SectionContext.Provider value={frontmatter.section || null}>
      <Head>
        <title>{newTitle}</title>
      </Head>
      <Headline1>{frontmatter.title || 'NO TITLE!'}</Headline1>
      <StyledMarkdown markdown={content} />
      <NextPrevButton
        prevLabel={frontmatter?.prev?.label}
        prevURL={frontmatter?.prev?.url}
        nextLabel={frontmatter?.next?.label}
        nextURL={frontmatter?.next?.url}
      />
      <DocsHelp fileRenderType={fileRenderType} />
    </SectionContext.Provider>
  );
}
StaticMarkdownPage.getLayout = getLayout;
