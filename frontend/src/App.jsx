import React from "react";

const App = () => {
  return (
    <div className="max-w-[1440px] m-auto border-4">
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-[9999]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Meta It School</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Biz haqimzda</a></li>
      <li>
        <details>
          <summary>Kurslar</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Frontend</a></li>
            <li><a>Backent</a></li>
          </ul>
        </details>
      </li>
      <li><a>Aloqa uchun</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Krish</a>
  </div>
</div>


<div
  className="hero min-h-[600px]"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Meta It School</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Qabulga yozilish</button>
    </div>
  </div>
</div>



<div className="hero bg-base-200 min-h-[400px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Biz haqimizda</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Batafsil</button>
    </div>
  </div>
</div>
</div>
  )
}

export default App