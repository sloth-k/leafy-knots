import { SectionHeading } from "@/components/common/SectionHeading";
import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="bg-[#F3EBDF]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Early trust signals for a growing handmade brand"
          description="A few polished placeholders are included so the section is ready for real customer quotes as they come in."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-card"
            >
              <p className="text-base leading-8 text-brown/80">"{testimonial.quote}"</p>
              <footer className="mt-6">
                <p className="font-heading text-xl text-brown">{testimonial.name}</p>
                <p className="text-sm text-brown/60">{testimonial.context}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
