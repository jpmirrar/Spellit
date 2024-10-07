"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function NewTest() {
  const [subject, setSubject] = useState('');
  const [chapter, setChapter] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const router = useRouter();

  const handleStartTest = () => {
    // TODO: Generate test and save to Cloudflare D1
    console.log('Starting test:', { subject, chapter, difficulty });
    router.push('/test/123'); // Replace with actual test ID
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Start New Test</h1>
      <div className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Select onValueChange={setSubject}>
            <SelectTrigger id="subject">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="history">History</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="chapter">Chapter</Label>
          <Select onValueChange={setChapter}>
            <SelectTrigger id="chapter">
              <SelectValue placeholder="Select chapter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chapter1">Chapter 1</SelectItem>
              <SelectItem value="chapter2">Chapter 2</SelectItem>
              <SelectItem value="chapter3">Chapter 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="difficulty">Difficulty</Label>
          <Select onValueChange={setDifficulty}>
            <SelectTrigger id="difficulty">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleStartTest} className="w-full">Start Test</Button>
      </div>
    </div>
  );
}