import React from 'react'
import { Link} from "react-router-dom";
function Log() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="pl-5 mb-5">
    <div className="max-w-3xl rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Laptop"
        className="max-w-3xl w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">My Name</h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi, debitis?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi, debitis?
        </p>
      </div>
    </div>

    <div
      className="m-auto my-6 w-screen max-w-3xl rounded-lg border border-gray-200 p-4 pt-4 shadow-sm sm:p-6 lg:p-8 mr-8"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
    >
      <h1 className="font-bold">Popular Posts</h1>
      <div className="mt-6 space-y-6">
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png"
              alt="Nike Air Force 1 07 LV8"
              className="h-16 w-16 rounded object-contain"
            />
            <div>
              <h3 className="text-sm text-gray-900">Nike Air Force 1 07 LV8</h3>
              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                
                <div>
                  <dt className="inline"> Lorem ipsum dolor </dt>
                  <dd className="inline">Orange</dd>
                </div>
              </dl>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png"
              alt="Nike Blazer Low 77 SE"
              className="h-16 w-16 rounded object-contain"
            />
            <div>
              <h3 className="text-sm text-gray-900">Nike Blazer Low 77 SE</h3>
              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                
                <div>
                  <dt className="inline"> Lorem ipsum dolor </dt>
                  <dd className="inline">White</dd>
                </div>
              </dl>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png"
              alt="Nike Air Max 90"
              className="h-16 w-16 rounded object-contain"
            />
            <div>
              <h3 className="text-sm text-gray-900">Nike Air Max 90</h3>
              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                
                <div>
                  <dt className="inline"> Lorem ipsum dolor </dt>
                  <dd className="inline">Black</dd>
                </div>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
    <div className="max-h-dvh   ">
      <img
        className="h-full w-full rounded-md object-cover object-top"
        src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt=""
      />

      <div
        className="m-auto my-6 w-screen max-w-screen-md rounded-lg border border-gray-200 p-4 pt-4 shadow-sm sm:p-6 lg:p-8 mr-12 "
        aria-modal="true"
        role="dialog"
        tabindex="-1"
      >
        <h1 className="font-bold text-xl -mt-8" >TITLE HEADING</h1>
        <h2 className="text-xs mb-6">Titile description, Aug 7 2024</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi, debitis?
        </p>

        <div className="flex items-center lg:order-2 ">
          <Link
            to="#"
            className="text-black  bg-slate-200 hover:bg-green-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-7 py-2 lg:py-2.5 mr-96 focus:outline-none"
          >
            READ MORE
          </Link>
          <Link
            to="#"
            className="text-black   focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 ml-3 focus:outline-none"
          >
            Comments
          </Link>
        </div>
      </div>
    </div>

   
  </div>
  )
}

export default Log