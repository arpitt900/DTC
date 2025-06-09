export function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by diamond traders worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between bg-white p-10 shadow-lg rounded-2xl">
              <div>
                <div className="flex gap-x-3">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-xl font-semibold text-emerald-600">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{testimonial.name}</h3>
                    <p className="text-base leading-7 text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-8 text-base leading-7 text-gray-600">"{testimonial.content}"</p>
              </div>
              <div className="mt-8 flex items-center gap-x-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Diamond Wholesaler, New York",
    content:
      "The AI recommendations have transformed how I source diamonds. I'm finding exactly what my clients need in half the time.",
  },
  {
    name: "Sarah Chen",
    role: "Jewelry Designer, Hong Kong",
    content:
      "As a designer, finding unique stones is crucial. This platform connects me with suppliers I never would have discovered otherwise.",
  },
  {
    name: "Raj Patel",
    role: "Diamond Trader, Mumbai",
    content:
      "The inventory management tools and market insights have helped me optimize my stock and increase my profit margins by 15%.",
  },
]
