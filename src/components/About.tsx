const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-gradient-accent rounded-full" />
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a 33-year-old creative professional based in{" "}
            <span className="text-foreground font-medium">Ashdod, Israel</span>.
            I'm currently working as a baker at Roladin, but my journey has been
            anything but conventional.
          </p>

          <p>
            My passion for music led me to become a DJ and dive deep into
            electronic music production. I've spent countless hours mastering
            tools like <span className="text-foreground font-medium">Cubase</span>,{" "}
            <span className="text-foreground font-medium">FL Studio</span>, and{" "}
            <span className="text-foreground font-medium">Ableton</span> —
            crafting beats and mixing tracks that move people.
          </p>

          <p>
            Along the way, I discovered another love:{" "}
            <span className="text-foreground font-medium">UI/UX design</span>.
            The intersection of aesthetics and functionality fascinated me, and I
            delved into learning design principles and tools.
          </p>

          <p>
            Now, I'm channeling all these experiences into my passion for gaming,
            where I've developed <span className="text-foreground font-medium">strategic thinking</span>,{" "}
            <span className="text-foreground font-medium">quick decision-making</span>, and exceptional{" "}
            <span className="text-foreground font-medium">team coordination skills</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
