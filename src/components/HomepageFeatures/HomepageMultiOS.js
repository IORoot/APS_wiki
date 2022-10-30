import React from 'react';


export default function HomepageFeaturesFirst() {

  return (
    <section className="relative">
      <div className="container px-32 mb-40">
        <div className="grid grid-cols-2 gap-32">

          <div className="flex flex-col gap-8 my-auto">

            <div className="flex flex-row gap-4">

              <a href="/downloads" className="p-4 hover:bg-stone-300 rounded-lg text-center hover:text-black hover:no-underline ease-linear bg-gray-900 text-gray-100">
                <img className="w-14 h-14 m-4 fill-white" src="img/Apple_M1.svg"></img>
                <div className="text-xl">MacOS</div>
                <div className="text-xs">Apple M1</div>
              </a>

              <a href="/downloads" className="p-4 hover:bg-stone-300 rounded-lg text-center hover:text-black hover:no-underline ease-linear bg-gray-700 text-gray-100">
                <svg className="w-14 h-14 m-4 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                </svg>
                <div className="text-xl">MacOS</div>
                <div className="text-xs">Apple Intel</div>
              </a>

              <a href="/downloads" className="p-4 hover:bg-stone-300 rounded-lg text-center hover:text-black hover:no-underline ease-linear bg-sky-400 text-gray-100">
                <svg className="w-14 h-14 m-4 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Windows</title><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
                <div className="text-xl">Windows</div>
                <div className="text-xs">Microsoft</div>
              </a>

            </div>

            <div>
              <h3>Platform Agnostic</h3>
              <p className="text-gray-500">Built with electron, this desktop application can run on <br/> Apple MacOS M1, Apple Intel chips and Microsoft Windows.</p>
              <a className="text-gray-900" href="/downloads">Download for your Operating System<svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg></a>
            </div>
          </div>


          <div className="flex flex-col gap-8">
            <div className="overflow-hidden h-196">
              <img className="absolute right-0 w-2/5" src="img/Laptop.png"></img>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

}
