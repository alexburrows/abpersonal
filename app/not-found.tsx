import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-text-primary">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-text-muted">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
        <p className="mt-4 text-sm text-text-secondary">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="btn btn-primary mt-8"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
