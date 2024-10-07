"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function TestSummary({ params }: { params: { id: string } }) {
  const [summary, setSummary] = useState({ known: 0, unknown: 0, total: 0 });

  useEffect(() => {
    // TODO: Fetch test summary from Cloudflare D1
    // For now, we'll use dummy data
    setSummary({ known: 7, unknown: 3, total: 10 });
  }, [params.id]);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Test Summary</h1>
      <Card className="w-full max-w-md mb-8">
        <CardHeader>
          <CardTitle>Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Words Known:</span>
            <span>{summary.known}</span>
          </div>
          <div className="flex justify-between">
            <span>Words Unknown:</span>
            <span>{summary.unknown}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Words:</span>
            <span>{summary.total}</span>
          </div>
          <div className="flex justify-between">
            <span>Accuracy:</span>
            <span>{((summary.known / summary.total) * 100).toFixed(2)}%</span>
          </div>
          <Progress value={(summary.known / summary.total) * 100} />
        </CardContent>
      </Card>
      <div className="flex flex-col sm:flex-row justify-between w-full max-w-md space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
        <Button asChild className="w-full sm:w-auto">
          <Link href={`/retake-test/${params.id}`}>Retake Test (Unknown Words)</Link>
        </Button>
      </div>
    </div>
  );
}