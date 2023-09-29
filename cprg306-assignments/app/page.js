import Link from 'next/link';

function StudentInfo() {
  return (
    <div>
      <h1>Rob Carlson</h1>
      <p>CPRG 306 A</p>
      <Link href="https://github.com/robbiecarlson">Link to my GitHub</Link>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className={`mb-3 text-2xl font-semibold`}>CPRG306: Web Development 2 - Assignments</h1>
      </div>
      <div>
        <StudentInfo/>
        <Link href="./week2">Week 2
      </Link>
      </div>
    </main>
  )
}
