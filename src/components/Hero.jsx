import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='dg_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize your Articles using <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT</span>
      </h1>
      <h2 className='desc'>
      An open-source article summarizer, to make reading easier by turning long articles into simple summaries.
      </h2>
    </header>
  );
};

export default Hero;