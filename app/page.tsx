import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-4">
            <h1 className="text-5xl font-bold text-primary" style={{ fontFamily: "'Bangers', cursive" }}>
              Spell It
            </h1>
            <p className="text-2xl text-muted-foreground" style={{ fontFamily: "'Bangers', cursive" }}>
              Unscramble the Fun!
            </p>
          </div>
          <CardDescription className="text-lg">Enhance your vocabulary with interactive challenges</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Button asChild className="w-full text-lg" size="lg">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline" className="w-full text-lg" size="lg">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}