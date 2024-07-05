import React, { useEffect , useState } from 'react'

function Darkmode() {
  const[theme,setTheme] = useState('light')
  const element = document.documentElement
  const options = [
    {
      icon : 'sunny',
      text:'light',
    },
    {
      icon:'moon',
      text: 'dark',
    },
  ];
  useEffect(() =>{
    switch(theme){
    case 'dark':
      element.classList.add('dark');
      break;
      case 'light':
        element.classList.remove('dark');
        break;
    }
  },[theme])
  return (
    <div className="relative duration-100 dark:bg-slate-800 bg-gray-100 rounded">
      {
        options?.map((opt)=>(
          <button key = {opt.text}
          role="link"
          onClick={()=> setTheme(opt.text)}
          className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-pink-600"}`}>
          <ion-icon name={opt.icon}></ion-icon>
          </button>
        ))
      }
   
  </div>
  )
}

export default Darkmode
