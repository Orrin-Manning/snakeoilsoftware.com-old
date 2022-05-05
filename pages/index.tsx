import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="container">
        <section className="mx-2">
          <h1 className="display-6 text-center">
            Independent Website and Mobile App Development
          </h1>
          <p>
            Snake Oil Software is proudly owned and operated in
            <span className="fw-bolder fst-italic">Lubbock, Texas</span>
            with the aim of providing hands-on development services to
            individuals and small businesses in the west Texas region. The last
            few years have shown us all how vital a digital presence is, and we
            want to help bring you or your business up to date with the current
            industry standards.
          </p>
        </section>
        <div className="card text-dark px-3 py-4 mb-4">
          <h3 className="text-center">Let's get in touch!</h3>
          <p>
            We would love to hear more about you and the technological needs of
            your business! Complete the form on our contact page so we can reach
            out to you and establish a personalized plan of action.
          </p>
          <div className="d-grid col-6 mx-auto">
            <Link href="/contact">
              <a className="btn btn-dark">Contact Us Today</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
