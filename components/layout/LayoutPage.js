import Link from "next/link";

function LayoutPage({ children }) {
  return (
    <>
      <header className="flex justify-between m-4 max-w-3xl md:mx-auto">
        <h2 className=""> CRM Project</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="h-screen max-w-3xl mx-auto ">{children}</div>
      {/* <footer className="text-center text-blue-600  bottom-0 bg-blue-100">
        <a href="/" target="_blank" rel="noreferrer">
          CRM App
        </a>
        Next.js course | CRM Pct &copy;
      </footer> */}
    </>
  );
}

export default LayoutPage;
