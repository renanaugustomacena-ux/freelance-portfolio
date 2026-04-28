import type { GitHubRepo } from '../types';

const GITHUB_USERNAME = import.meta.env.PUBLIC_GITHUB_USERNAME || 'renanaugustomacena-ux';

export const PROJECTS_PAGE_EXCLUDE = new Set([
  'freelance-portfolio',
  'security-teacher',
  'Projectwork-IFTS-Private',
  'invest-smart',
  'trading-ecosystem',
  'macena-smart-erp',
  'macena-logi-track',
  'macena-greenmetrics',
  'macena-teamflow',
  'macena-fatturaflow',
  'macena-factorymind',
  'macena-agrivigna',
  'macena-cyberguard',
  'macena-tracevino',
]);

export const LANDING_EXCLUDE = new Set([
  'freelance-portfolio',
  'security-teacher',
  'Projectwork-IFTS-Private',
]);

export async function fetchGitHubRepos(exclude: Set<string> = PROJECTS_PAGE_EXCLUDE): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .filter((repo) => !repo.fork && !repo.archived && !exclude.has(repo.name))
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return [];
  }
}
