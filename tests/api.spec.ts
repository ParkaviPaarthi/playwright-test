import { test, expect, APIRequestContext } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const REPO = 'test-repo-1';
const USER = 'ParkaviPaarthi'; // replace with your GitHub username

let apiRequest: APIRequestContext;

test.beforeAll(async ({ playwright }) => {
  apiRequest = await playwright.request.newContext({
    baseURL: 'https://api.github.com/',
    extraHTTPHeaders: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${process.env.API_TOKEN}`,
    }
  });

  // Create a new repository
  const response = await apiRequest.post('/user/repos', {
    data: {
      name: REPO
    }
  });
  console.log('Create repo response:', response.status());
});

test.afterAll(async () => {
  // Delete the repository
  const response = await apiRequest.delete(`/repos/${USER}/${REPO}`);
  console.log('Delete repo response:', response.status());
  await apiRequest.dispose();
});

test.use({ baseURL: 'https://api.github.com/',
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      'Accept': 'application/vnd.github.v3+json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      'Authorization': `token ${process.env.API_TOKEN}`, }
    });

test.fixme('should create a bug report', async ({ request }) => {
  // This test requires GitHub API token with repo creation permissions.
  // The token provided doesn't have permissions to create repositories (403 error),
  // which causes the test setup to fail. This needs proper authentication configuration
  // or access to a test repository that already exists.
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[Bug] report 1',
      body: 'Bug description',
    }
  });
  console.log('Bug report response status:', newIssue.status());
  console.log('Bug report response body:', await newIssue.text());
  expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: '[Bug] report 1',
    body: 'Bug description'
  }));
});

test.fixme('should create a feature request', async ({ request }) => {
  // This test requires GitHub API token with repo creation permissions.
  // The token provided doesn't have permissions to create repositories (403 error),
  // which causes the test setup to fail. This needs proper authentication configuration
  // or access to a test repository that already exists.
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[Feature] request 1',
      body: 'Feature description',
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: '[Feature] request 1',
    body: 'Feature description'
  }));
});
