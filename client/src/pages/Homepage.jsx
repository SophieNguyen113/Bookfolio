export default function Homepage({user, api_url}) {
  const AUTH_URL_LOGIN = `${api_url}/auth/github`;
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-40">
        <h1 className="text-5xl font-bold mb-4">Track, Record, and Share</h1>
        <p className="text-lg text-white-600 mb-8">Discover, record, and manage your favorite books with Bookfolio</p>
        <button className="group relative overflow-hidden px-10 py-3 mt-5 text-2xl font-bold cursor-pointer bg-white-600 text-white rounded-md outline-offset-4 hover:animate-[rotate-bounce_1s_infinite_ease-in-out]">
          <a
            href={AUTH_URL_LOGIN}
            className="relative cursor-pointer no-underline font-bold border-white-600 border p-2 rounded-xl"
          >
            Join Now
          </a>
        </button>
      </section>
      
      {/* Feature Section */}
      <section className="py-16">
        <h2 className="text-center text-4xl font-bold mb-16">Why use Bookfolio?</h2>

        {/* Container 1 - Record Reads */}
        <div className="flex items-center justify-evenly mb-16">
          <div className="w-1/3 overflow-hidden rounded-lg shadow-lg">
            <img src="./record.jpg" alt="Record Your Reads" className="w-full object-cover" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Record Your Reads</h3>
            <p className="text-white-600">Create a list to share</p>   
          </div>
        </div>

        {/* Container 2 - Discover Interests */}
        <div className="flex items-center justify-evenly mb-16">
          <div className="text-center max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Discover Similar Interests</h3>
            <p className="text-white-600">Find people with similar interests using AI-powered suggestions based on your reading history.</p>    
          </div>
          <div className="w-1/3 overflow-hidden rounded-lg shadow-lg">
            <img src="./review.jpg" alt="Discover Interests" className="w-full object-cover" />
          </div>
        </div>

        {/* Container 3 - Share Thoughts */}
        <div className="flex items-center justify-evenly">
          <div className="w-1/3 overflow-hidden rounded-lg shadow-lg">
            <img src="./thoughts.jpg" alt="Share Your Thoughts" className="w-full object-cover" />
          </div>
          <div className="text-center max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Share Your Thoughts with Others</h3>
            <p className="text-white-600">Engage in discussions and get book insights from fellow readers.</p>    
          </div>
        </div>
      </section>

    </div>
  );
}