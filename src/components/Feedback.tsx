import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import cameraImage from "@/assets/security-camera.png";

const Feedback = () => {
  const [cameraRotation, setCameraRotation] = useState({ angle: 0, tilt: 0 });
  const cameraRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleTextInput = () => {
      if (!textareaRef.current || !cameraRef.current) return;

      const textarea = textareaRef.current;
      const cameraRect = cameraRef.current.getBoundingClientRect();
      const textareaRect = textarea.getBoundingClientRect();

      // Get cursor position in textarea
      const cursorPos = textarea.selectionStart;
      const textBeforeCursor = textarea.value.substring(0, cursorPos);
      const lines = textBeforeCursor.split('\n');
      const currentLine = lines.length;
      const currentColumn = lines[lines.length - 1].length;

      // Calculate approximate cursor position
      const charWidth = 8;
      const lineHeight = 24;
      
      const cursorX = textareaRect.left + currentColumn * charWidth + 12; // padding offset
      const cursorY = textareaRect.top + (currentLine - 1) * lineHeight + 20; // padding offset

      // Calculate relative position to camera center
      const cameraCenterX = cameraRect.left + cameraRect.width / 2;
      const cameraCenterY = cameraRect.top + cameraRect.height / 2;

      const deltaX = cursorX - cameraCenterX;
      const deltaY = cursorY - cameraCenterY;

      // Calculate angle for camera rotation (-30 to 30 degrees)
      const angle = Math.atan2(deltaX, -deltaY) * (180 / Math.PI);
      const clampedAngle = Math.max(-30, Math.min(30, angle));

      // Calculate tilt based on vertical distance (-20 to 20 degrees)
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const tilt = Math.max(-20, Math.min(20, (deltaY / distance) * 20));

      setCameraRotation({ angle: clampedAngle, tilt });
    };

    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener('input', handleTextInput);
      textarea.addEventListener('click', handleTextInput);
      textarea.addEventListener('keyup', handleTextInput);
      textarea.addEventListener('focus', handleTextInput);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener('input', handleTextInput);
        textarea.removeEventListener('click', handleTextInput);
        textarea.removeEventListener('keyup', handleTextInput);
        textarea.removeEventListener('focus', handleTextInput);
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

        {/* Surveillance Camera */}
        <div className="flex justify-center mb-8">
          <div ref={cameraRef} className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <div
              className="transition-all duration-300 ease-out"
              style={{
                transform: `rotateZ(${cameraRotation.angle}deg) rotateX(${cameraRotation.tilt}deg)`,
                transformOrigin: 'center center',
              }}
            >
              <img
                src={cameraImage}
                alt="Surveillance camera watching your typing"
                className="w-full h-full object-contain drop-shadow-lg"
              />
              {/* Recording indicator light */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Feedback Card */}
        <Card className="shadow-medium hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <Textarea
              ref={textareaRef}
              placeholder="Type your feedback here... Watch the camera follow your typing! 📹"
              className="min-h-[200px] text-base resize-none"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Feedback;
