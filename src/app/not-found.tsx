import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-16">
      <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">404</p>
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-base-content/60 mb-8">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="btn btn-primary rounded-lg px-8">Back to home</Link>
    </section>
  );
}
