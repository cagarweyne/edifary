import { Octokit } from 'octokit';
import { bundleMDX } from 'mdx-bundler';

const octokit = new Octokit({
  auth: process.env.GITHUB_KEY,
});

export async function getPosts() {
  return await octokit.request(
    'GET /repos/{owner}/{repo}/contents/{path}{?ref}',
    {
      owner: 'cagarweyne',
      repo: 'fullstackstudent-blog',
      path: '/blog',
    }
  );
}

export async function getSinglePost(slug: string) {
  return await octokit.request(
    'GET /repos/{owner}/{repo}/contents/{path}{?ref}',
    {
      owner: 'cagarweyne',
      repo: 'fullstackstudent-blog',
      path: `/blog/${slug}`,
    }
  );
}

export async function parseMarkdown(content: string) {
  const mdxResult = await bundleMDX({
    source: content,
  });

  const { code, frontmatter } = mdxResult;

  return {
    code,
    frontmatter,
  };
}
