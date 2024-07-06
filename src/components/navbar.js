import { useState } from "react";
export default function NavBar({}) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme)=>{
      document.body.classList.remove('light-theme');
      document.body.classList.remove('dark-theme');
      console.log(theme);
      if(theme === 'light'){
        document.body.classList.add('dark-theme');
        setTheme('dark')
      }else{
        document.body.classList.add('light-theme');
        setTheme('light')
      }
      // setTheme(th);
    });
  };
  return (
    <>
      <div className="w-full flex flex-row bg-bg-default justify-between items-center">
          {/* <img src={AppIcon} width={200} height={150}></img> */}
          <h1 className="p-1 text-lg text-pretty text-fg-accent font-semibold font-sans cursor-default"></h1>
        <div></div>
        <div className="p-1">
          <label className="inline-flex items-center cursor-pointer" title="dark/light">
            <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme} />
            <div
              className="relative w-9 h-5  peer-focus:outline-none rounded-full peer dark:bg-bg-accentEmphasis peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-black"
            ></div>
          </label>
        </div>
      </div>
    </>
  );
}
