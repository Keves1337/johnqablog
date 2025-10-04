import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const Feedback = () => {

  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Share Your Thoughts</h2>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto" />
        </div>

        {/* Feedback Card */}
        <Card className="shadow-medium hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <Textarea
              placeholder="Type your feedback here..."
              className="min-h-[200px] text-base resize-none"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Feedback;
