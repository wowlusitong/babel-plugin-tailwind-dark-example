import React from 'react';

export default function Home() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const htmlClassList = document.querySelector('html').classList;
    if (dark) {
      htmlClassList.add('dark')
    } else {
      htmlClassList.remove('dark')
    }
  }, [dark]);
  function handleClick() {

  }

  return (
    <>
      <header className="h-20 border-b border-gray-50 shadow text-2xl">
        <div className="container mx-auto flex justify-end items-center h-full font-medium">
          <a href="https://github.com/wowlusitong/babel-plugin-tailwind-dark" target="_blank" className="text-gray-900">
            Github
          </a>
        </div>  
      </header>  
      <div className="container mx-auto">
        <div className="border border-gray-50 p-20 rounded-xl mt-10 shadow">
          <h1 className="text-6xl font-extrabold text-center text-gray-900">Hello World !</h1>
          <div className="flex mt-20 justify-around">
            <button className="focus:outline-none px-10 py-3 rounded-md font-semibold bg-blue-600 text-white" onClick={() => setDark(prevState => !prevState)}>
              Toggle {dark ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </div>
      </div>
    </>

  )
}
