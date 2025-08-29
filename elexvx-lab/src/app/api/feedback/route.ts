import { type NextRequest, NextResponse } from 'next/server';
import { type ActionResponse, type Feedback } from '@/components/feedback';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { opinion, message, url } = (await req.json()) as Feedback & { url: string };

  if (!opinion || !message || !url) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const body = {
    title: `Feedback for ${url}`,
    body: `**URL:** ${url}
**Opinion:** ${opinion}
**Message:**
${message}`,
    labels: ['feedback'],
  };

  try {
    // 这里可以集成到GitHub Issues或其他反馈系统
    // 示例中使用GitHub API创建issue
    const githubUrl = process.env.GITHUB_ISSUES_URL;
    
    if (githubUrl) {
      const response = await fetch(githubUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to create GitHub issue');
      }

      const data = await response.json();
      const result: ActionResponse = {
        githubUrl: data.html_url,
      };
      
      return NextResponse.json(result);
    }

    // 如果没有配置GitHub，返回模拟URL
    const result: ActionResponse = {
      githubUrl: `https://github.com/example/feedback/issues/1`,
    };
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing feedback:', error);
    return NextResponse.json({ error: 'Failed to process feedback' }, { status: 500 });
  }
}