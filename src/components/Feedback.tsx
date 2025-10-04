import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import eyesImage from "@/assets/cute-eyes.png";

const Feedback = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const eyesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyesRef.current) return;

      const eyesRect = eyesRef.current.getBoundingClientRect();
      const eyesCenterX = eyesRect.left + eyesRect.width / 2;
      const eyesCenterY = eyesRect.top + eyesRect.height / 2;

      const deltaX = e.clientX - eyesCenterX;
      const deltaY = e.clientY - eyesCenterY;

      // Calculate angle and distance
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 25);
      
      // Convert to x, y coordinates for pupil movement (max 25px from center)
      const maxMovement = 25;
      const normalizedDistance = Math.min(distance / 3, maxMovement);
      
      const x = Math.cos(angle) * normalizedDistance;
      const y = Math.sin(angle) * normalizedDistance;

      setEyePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Share Your Thoughts</h2>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto" />
        </div>

        {/* Animated Eyes */}
        <div ref={eyesRef} className="flex justify-center mb-8">
          <div className="relative w-80 h-40 md:w-96 md:h-48">
            <img
              src={eyesImage}
              alt="Watching eyes"
              className="w-full h-full object-contain"
            />
            {/* Left Pupil */}
            <div
              className="absolute left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-foreground rounded-full transition-transform duration-150 ease-out"
              style={{
                transform: `translate(calc(-50% + ${eyePosition.x}px), calc(-50% + ${eyePosition.y}px))`,
              }}
            >
              <div className="absolute top-[20%] left-[30%] w-2 h-2 md:w-3 md:h-3 bg-background rounded-full" />
            </div>
            {/* Right Pupil */}
            <div
              className="absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-foreground rounded-full transition-transform duration-150 ease-out"
              style={{
                transform: `translate(calc(-50% + ${eyePosition.x}px), calc(-50% + ${eyePosition.y}px))`,
              }}
            >
              <div className="absolute top-[20%] left-[30%] w-2 h-2 md:w-3 md:h-3 bg-background rounded-full" />
            </div>
          </div>
        </div>

        {/* Feedback Card */}
        <Card className="shadow-medium hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <Textarea
              placeholder="Type your feedback here... Watch the eyes follow your mouse! 👀"
              className="min-h-[200px] text-base resize-none"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Feedback;
