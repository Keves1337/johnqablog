import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import monsterImage from "@/assets/feedback-monster.png";

const Feedback = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const monsterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTextareaChange = () => {
      if (!textareaRef.current || !monsterRef.current) return;

      const textarea = textareaRef.current;
      const monsterRect = monsterRef.current.getBoundingClientRect();
      const textareaRect = textarea.getBoundingClientRect();

      // Get cursor position in textarea
      const cursorPos = textarea.selectionStart;
      const textBeforeCursor = textarea.value.substring(0, cursorPos);
      const lines = textBeforeCursor.split('\n');
      const currentLine = lines.length;
      const currentColumn = lines[lines.length - 1].length;

      // Approximate cursor position (rough calculation)
      const charWidth = 8; // approximate character width
      const lineHeight = 24; // approximate line height
      
      const cursorX = textareaRect.left + currentColumn * charWidth;
      const cursorY = textareaRect.top + (currentLine - 1) * lineHeight;

      // Calculate relative position to monster center
      const monsterCenterX = monsterRect.left + monsterRect.width / 2;
      const monsterCenterY = monsterRect.top + monsterRect.height / 2;

      const deltaX = cursorX - monsterCenterX;
      const deltaY = cursorY - monsterCenterY;

      // Normalize to eye movement range (-15 to 15 pixels)
      const maxDistance = 300;
      const normalizedX = Math.max(-15, Math.min(15, (deltaX / maxDistance) * 15));
      const normalizedY = Math.max(-15, Math.min(15, (deltaY / maxDistance) * 15));

      setCursorPosition({ x: normalizedX, y: normalizedY });
    };

    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener('input', handleTextareaChange);
      textarea.addEventListener('click', handleTextareaChange);
      textarea.addEventListener('keyup', handleTextareaChange);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener('input', handleTextareaChange);
        textarea.removeEventListener('click', handleTextareaChange);
        textarea.removeEventListener('keyup', handleTextareaChange);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Share Your Thoughts</h2>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto" />
        </div>

        {/* Monster Character */}
        <div ref={monsterRef} className="flex justify-center mb-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <img
              src={monsterImage}
              alt="Friendly feedback monster"
              className="w-full h-full object-contain"
            />
            {/* Animated Eyes */}
            <div className="absolute inset-0 flex items-center justify-center gap-8 md:gap-12">
              <div
                className="w-4 h-4 md:w-6 md:h-6 bg-foreground rounded-full transition-transform duration-200 ease-out"
                style={{
                  transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                }}
              />
              <div
                className="w-4 h-4 md:w-6 md:h-6 bg-foreground rounded-full transition-transform duration-200 ease-out"
                style={{
                  transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Feedback Card */}
        <Card className="shadow-medium hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <Textarea
              ref={textareaRef}
              placeholder="Type your feedback here... Watch the monster's eyes follow your text! 👀"
              className="min-h-[200px] text-base resize-none"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Feedback;
