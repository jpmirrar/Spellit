"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function Test({ params }: { params: { id: string } }) {
  const [words, setWords] = useState([
    { scrambled: 'PLEPA', original: 'APPLE' },
    { scrambled: 'NANABA', original: 'BANANA' },
    { scrambled: 'RRYCHE', original: 'CHERRY' },
    { scrambled: 'RAGONE', original: 'ORANGE' },
    { scrambled: 'WRAYBTRES', original: 'STRAWBERRY' },
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // In a real application, you would fetch the words based on the test ID
    console.log('Fetching words for test ID:', params.id);
    // Simulating an API call
    // setWords(fetchedWords);
  }, [params.id]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = (known: boolean) => {
    // TODO: Save progress to Cloudflare D1
    console.log('Word known:', known);
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setIsFlipped(false);
    } else {
      router.push(`/test-summary/${params.id}`);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Word Scramble Test</h1>
      <Progress value={((currentWordIndex + 1) / words.length) * 100} className="w-full max-w-md mb-8" />
      <Card className="w-full max-w-md mb-8 perspective">
        <CardContent className="p-0">
          <div
            className={`w-full h-64 [transform-style:preserve-3d] transition-transform duration-500 cursor-pointer ${
              isFlipped ? '[transform:rotateY(180deg)]' : ''
            }`}
            onClick={handleFlip}
          >
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold backface-hidden bg-primary text-primary-foreground rounded-lg">
              {words[currentWordIndex].scrambled}
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold [transform:rotateY(180deg)] backface-hidden bg-secondary text-secondary-foreground rounded-lg">
              {words[currentWordIndex].original}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between w-full max-w-md">
        <Button onClick={() => handleNext(false)} variant="outline">I Don't Know</Button>
        <Button onClick={() => handleNext(true)}>I Know</Button>
      </div>
    </div>
  );
}