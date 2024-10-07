"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles } from 'lucide-react';
import ProfileMenu from '@/components/ProfileMenu';

export default function Dashboard() {
  const [user, setUser] = useState({ name: 'Awesome Learner' }); // TODO: Implement user state
  const [tests, setTests] = useState([]); // TODO: Fetch tests from Cloudflare D1
  const [subjects, setSubjects] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    // TODO: Fetch user data, tests, subjects, chapters, and difficulties from Cloudflare D1
    // For now, we'll use dummy data
    setSubjects(['English', 'Science', 'History']);
    setChapters(['Chapter 1', 'Chapter 2', 'Chapter 3']);
    setDifficulties(['Easy', 'Medium', 'Hard']);
    setTests([
      { id: '1', name: 'English Vocabulary', date: '2023-05-15', score: 80 },
      { id: '2', name: 'Science Terms', date: '2023-05-20', score: 75 },
      { id: '3', name: 'Historical Events', date: '2023-05-25', score: 90 },
    ]);
  }, []);

  const createConfetti = () => {
    const newConfetti = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`
      });
    }
    setConfetti(newConfetti);
  };

  const handleStartAdventure = () => {
    createConfetti();
    // TODO: Generate a new test ID
    const newTestId = 'new-test-id';
    window.location.href = `/test/${newTestId}`;
  };

  return (
    <div className="container mx-auto p-4 relative min-h-screen">
      {confetti.map((conf, index) => (
        <div
          key={index}
          className="confetti"
          style={{
            left: conf.left,
            top: conf.top,
            animation: `fall ${conf.animationDuration} ${conf.animationDelay} linear infinite`
          }}
        />
      ))}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold" style={{ fontFamily: "'Bangers', cursive" }}>Spell It</h1>
        <div className="flex items-center space-x-4">
          <p className="text-xl">Hi, {user.name}!</p>
          <ProfileMenu />
        </div>
      </div>
      <Tabs defaultValue="newTest" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="newTest" className="text-lg font-bold">New Adventure</TabsTrigger>
          <TabsTrigger value="previousTests" className="text-lg font-bold">My Spelling Games</TabsTrigger>
        </TabsList>
        <TabsContent value="newTest">
          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Start a New Spelling Adventure!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue placeholder="Choose Your Subject" />
                </SelectTrigger>
                <SelectContent className="select-content">
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue placeholder="Pick a Chapter" />
                </SelectTrigger>
                <SelectContent className="select-content">
                  {chapters.map((chapter) => (
                    <SelectItem key={chapter} value={chapter}>{chapter}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue placeholder="Set Your Challenge Level" />
                </SelectTrigger>
                <SelectContent className="select-content">
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="w-full text-lg font-bold" onClick={handleStartAdventure}>
                <Sparkles className="mr-2 h-4 w-4" /> Start Your Adventure!
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="previousTests">
          <Card className="bg-accent text-accent-foreground">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Your Completed Spelling Games</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tests.length > 0 ? (
                  tests.map((test: any) => (
                    <Card key={test.id} className="bg-white">
                      <CardHeader>
                        <CardTitle>{test.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Date: {new Date(test.date).toLocaleDateString()}</p>
                        <p>Score: {test.score}%</p>
                        <Progress value={test.score} className="mt-2" />
                        <Button asChild variant="outline" className="mt-4">
                          <Link href={`/test/${test.id}`}>Play Again</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-center text-lg font-bold">No spelling games completed yet. Start a new adventure to begin your journey!</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}