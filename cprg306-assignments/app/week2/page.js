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
const Week2 = () => {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
        <h1 className={`mb-3 text-2xl font-semibold`}>My Shopping List</h1>
      </div>
      <div>
        <StudentInfo/>
      </div>
      </main>
    );
  };

  export default Week2;
  