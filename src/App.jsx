

function App() {
 

  return (
    <div className="bg-white w-full min-h-screen">
      <header className="flex justify-around items-center w-full h-1/5 pt-4">
          <h1 className="text-pink-500 font-bold text-xl cursor-pointer hover:text-gray-500">^_^ <span className="font-rem text-gray-500 hover:text-pink-500">eric_on_it</span></h1>
          <div className="flex items-center justify-center gap-8">
              <a className="text-gray-500 font-bricolage font-semibold cursor-pointer relative hover:text-black after:bg-pink-500 after:content-[''] after:h-[3px] after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full" href="#">Home</a>
              <a className="text-gray-500 font-bricolage font-semibold cursor-pointer hover:text-black relative  after:bg-pink-500 after:content-[''] after:h-[3px] after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full" href="#">About</a>
              <a className="text-gray-500 font-bricolage font-semibold cursor-pointer hover:textblack relative  after:bg-pink-500 after:content-[''] after:h-[3px] after:absolute after:left-0 after:-bottom-[5px] hover:after:w-full" href="#">Blog</a>
          </div>
      </header>

      <main className="w-full min-h-screen">
        <section className="w-full min-h-screen flex items-center justify-center flex-col gap-4">
          <h1 className="text-4xl md:text-8xl font-poppins font-bold text-pink-500">Unopinionated Golang</h1>
          <p className="text-gray-700 font-bricolage font-bold w-4/5 text-sm md:text-xl">This Golang framework is unopinionated and has an easy to learn syntax which is good for new developers...</p>
        </section>
      </main>
    </div>
   
  )
}

export default App
