import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // We can now use server-side environment variables safely
    const token = process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    
    if (!token) {
      return NextResponse.json({ 
        errors: [{ message: 'GitHub token not configured on server' }] 
      }, { status: 500 });
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ 
      errors: [{ message: 'Failed to fetch from GitHub API' }] 
    }, { status: 500 });
  }
}
