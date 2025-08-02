import React, { useState } from 'react'

function home() {
     const data = [
          {
               title:'Blog',
               discription:'I developed a dynamic blog website, designed to provide a seamless platform for publishing engaging content and offering an intuitive reading experience for users.',
               links:'https://separatedigital.netlify.app/Blog',
               repo:'',
               tech:[
                    "React js",
                    "HTML",
                    "Tailwind CSS",
                    "Remix icon",
                    "Node js",
                    "Express js",
                    ],
               date:'Jul 16, 2024',
               fullstack:true,
               backend:true,
               frontend:true,
          },
          {
               title:'Spotify Clone',
               discription:'A Spotify clone built with HTML, CSS, and JavaScript. It allows users to play music. The project showcases a responsive design and includes features and its looks similar to the original Spotify website in terms of layout and functionality.',
               links:'https://abhay7111.github.io/spotify/',
               repo:'https://github.com/Abhay7111/spotify',
               tech:[
                    "JavaScript",
                    "HTML 5",
                    "CSS",
                    ],
               date:'Dec 1, 2023',
               fullstack:false,
               backend:false,
               frontend:true,
          },
          {
               title:'biz-growth',
               discription:'I developed the official website for Prachar Expert, a digital growth accelerator specializing in SEO, SMM, and content mastery. The site is designed to effectively showcase their services, empowering them to help clients achieve a strong online presence.',
               links:'https://biz-growth.netlify.app/',
               repo:'https://github.com/Abhay7111/gonukkad',
               tech:[
                    "JavaScript",
                    "HTML 5",
                    "CSS",
                    ],
               date:'Mar 24, 2024',
               fullstack:false,
               backend:false,
               frontend:true,
          },
          {
               title:'Minefood',
               discription:'I designed and developed this comprehensive website for Minefood. The platform showcases their unique menu and inviting ambiance, enhancing their online presence and connecting them with a wider audience.',
               links:'https://minefood.netlify.app/',
               repo:'',
               tech:[
                    "React js",
                    "HTML",
                    "Tailwind CSS",
                    "Remix icon",
                    ],
               date:'Nov 13, 2024',
               fullstack:true,
               backend:true,
               frontend:true,
          },
          {
               title:'Github clone',
               discription:'I built the user interface and experience for this GitHub clone, meticulously replicating its design and interactive elements. This project showcases my skills in creating responsive, component-driven web applications that provide an intuitive user experience.',
               links:'https://abhay7111github.netlify.app/',
               repo:'',
               tech:[
                    "React js",
                    "HTML",
                    "Tailwind CSS",
                    "Remix icon",
                    ],
               date:'Mar 12, 2024',
               fullstack:false,
               backend:false,
               frontend:true,
          },
     ]
     const toolslogo = [
          {
               img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEhklEQVR4AbWXNbDkRhCG/x49NB4z5snlkZk5MjMzM23k7CA2MzPzhs58eXLM9PjpSZr+XaWZamtqZTjq2qnWLEx/9f89q5HgCOPaT859QD1fnMk5Ukz5ztd3/fYGjiAOG+DGz887rSJfoMdp6gnvielJBYjNvnKXf3fPzxuPC8Cd35+3qqi4zntcph5QBVQJ9URZEEVOiANc5t4Ql3W+uOmHzccE4MHPL5s1MVQ8QPJB9Zyl3goHiDjPJzUsKKhBJJMXv7jpl85RAdz20wU3CvECiVVWNAWw7EuimGEN4JxAXK3IZoHrfHbTz28cFsC9v190WlnxBZCnKQEweE0raDmMilANVmhFiJNgx995Y79ml3/QYoskcv9+2awC5TpV3ggKyFhUQ/ZqEClIzL5CDSFCuBQiKJPJG1mWdT64ykDgEOOiV057oEC1CcCNAgFBhFeQFSBCarAzzaEIQAZoyxreo+LGqqr+vOLts17oARgfK9dPTpSzEMIKCQSAtDqWEtFgSQANiKBksAmUWeP7/IunvXjarASAAuzcOgUQIGi1SIYMsaJtrUMabC27aoCgxsEwpic9yhkCg0gBxAFFqTiwfwYCgdWRaANCtpVSoSDBJ4MmAEYINqyamlBQlD0WUFiPfXtzeE9bSGA4EUrAf9tGAcYKKwllaNJ8WusMiPQAwJHISK+KgwfzdHkSFoT93JpQwiRim20aty5jL+RTPumb1AKJLwccODADVaI92NA9wrCJKzbRRiPO5BosARO7EgvgCELhqdi7L09XtpBEGBooTAFTCoCvghJF6Rm9B9sUQEZSNLwjwMGRHFWZLJle2/++9HwqzWYk6r9oKoPCQLsCcARcABEXZN61qeipKjahFUm2TGJDzApQyGBZqkAKkCkgFDpCJvsxNe7rkYakOUAklITNLUSdEIycZBuAQAhkBAoH0fDR/l0FBP8Syb8lkUpMgAEHKkE/K94DoKG4Ai7vN5mmJxQTo20qMNmGBAOIKSIQhLuQhbcWkB4AurALJB8AK0l82rejQG9Isi1tRTZ7hDZP3hIAQykAxDHINNFnsoYIt9iDe8pklWQ7SUMVkbRdxVYyFeiUbdsQMjrY9DCJkf0V1MeFicb3JPLQVDEEg7I1gy3eoRdgYmAEU/3JPaAZ6omRA2Wyu8AWSwgw0Tsm0j53PhMAIwmA23tiB4KRdCulMXbAoyw1qdl2LkjPEOklHEbg8VD3oW5dK0OMzb9u/mP1mas/JDhbIGvQE3aqwfCJGUjEQbtWElQJcxtivxPIBuS4vPtct9vGZnHaS6etguBzkq0gC5YPYGDQxYOqHc/juZDw4fTczF1W6HSfssL4F4AE5EaCLwBYhUYMDjvMXzoAOymrFTKICLS5KvnQr492vzjCBxMDeZHCB0DMigdWzFvaX6ugPlUgQoxoiQ0Dla7/Inp9pACpLcCLBG8AgKETMsxZ1Jc+qITrL6T0D31xV/dYPJq1g1D4OYg1s+b31SA1gLLrPTpf3PRL9zg+Haf9kQ3IC3MX9s1SsPPJtb+sxxHEX3WUaVLftBigAAAAAElFTkSuQmCC',
               name:'Node js',
          },
          {
               img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAS1BMVEX///+k3Op3zeGN1OXM6/Pc8feX2Oec2ej0+/xix958z+LH6fKz4e1YxNzk9Phvy+BJwNrA5vCF0eTR7fS34+4/vtno9vkzvNfx+vwXKPc3AAABEklEQVR4AbXRRaLdMAxA0Rsy21JASfa/0j6n7efpPwMzSvyyYZzmXi9u9IHPYsql1hZEhzwpn6zxKVWHXm8DH02ll7vW46kjH40ZWOwMugJN+SjNtKziXLJ14ax8tEWrupUXZ/WKkXerVWGtPNLAVK28bavLqdgCd4Nw3bKfUXiUCFTZYDBLr1IMSBOdLkCxk2C16g460Q+gswYcFrj75AzV83KFXvoRiNGDMxU4qv4b7URCsPs6Ydmfk+LOpIEH/pKRIjzchBObeBNGtdGGed/nYqNqPPkg5TsPGkXE/Hq2ykfjDGQNxOF74Lejl6WK+yFlx9jLRW3utXd8or7tyeZFJbdy3XxybxoLL4fo2PhVfwB6eg3nGSu+JgAAAABJRU5ErkJggg==',
               name:'React js',
          },
          {
               img:'data:image/png;base64,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',
               name:'HTML',
          },
          {
               img:'data:image/png;base64,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',
               name:'CSS',
          },
          {
               img:'data:image/png;base64,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',
               name:'Mongo DB',
          },
          {
               img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAwFBMVEX///9JrrNHrLNBpbJKr7NQtrRApLJDp7JRt7ROtLRYv7U5nLE7nrFWvbVMsbNTubQ2mbAzlbBcxLYylLD0+vrr9fe73OTw+fh/vM2bztex2t/V7O2DwM5IpbZ+0MXd8fCSx9RiwLua2NKm3deBxcvG6ebV7uzH4+l6vcpcr76Exs1xuMduvMOk1tmj0Nu94eOSztFgury25N5crb91x8NouMGM0c1zy8Cd2dR6zcSu39yd2NRlsMNzvcXS5+1QpLsd9icmAAAF+0lEQVR4nO2b61aqQBSAFS0NLNEDeNQMLxhppVmKeUnf/60OiCCXuWFnclprf39zGV/7MsPMLpcDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJ9Ds1vNp1GnUrn2GX01W7Z26afKiGZ0XQOf65BCoVQqjVv6pZ+OFc1+rpy4Toi4vPwKF73ZURQFJVIIREolady+9HNS0LqKQvdwTSRLaBVDSXgkKyT0cLGETTB9qyZF0B6+iCS9XvqJ0dgVVWVNLJ/8i3nph0YwUVMelIBI+XxxeunHTtFV0yK0gHi8XfrBE9yHHgrCAyly8CgWLaFW+3tEPCgByR9F7mYCdS+vPlgTKxGQ4t3dTJiSt1WaCMlDHBN9nyEgUlzk7k4gk2eyBzUgopgY30wsj5sMJo1HPh7atxPLE2E30R449euuGl9COp0MrTf0YDfpP/Dx0E+JVXma2Ic1Qbdb3Q5DQIoRj5srNpNB/Z2PSBiQZzv+A/cNi7FCbnyRqzKDyaBeb3Dx0I8e96jluVUiJlY8IFc3V2VqGffrdU6Z5QfkA/O6p48ZKv3o4VIuD4m/THM9OGXWoWUpXfwHWsjdO1akuiH8MvPB9eCUWd4aotikT5gLpkr3PcrV6hy7hXz3NOr9/y/h4S7qH5TNa2NB9zhUiBcQjzXya/xw1Ot8tgBuqX/Ql6cv1oBUfXrr1Hc+Or4Gr1I3qPHw0Cx6642KuCrOMPK95npZD+C0J9vu2V6KxsQ1PeVRrd7e3vac/udg0O87siyHHpwConVYT9ksaseKidx6yCF13gExDOaPWhGRIktAkCIDPh65LNtQC7l7j3QshoAsRTin0CyMyGkJoSYWed3/MSxcpbMGhFdiZWZM6FgMHpw61jm84ZcQuogQBRLQOj+xlnw2i+cyzZpYspgeuVx7dlaFPIjm4bXhM9Z0Xgcn32OK3yz6HikRTscN36bxlimxHkQ4hcTQnoci5dQmK17pS1HDcWQ4Z2q9y4GQ1RHD3FATayXI5orK0OnhK301EK/lEmhMN/NUQJbOgNOJexKtvdvZhtFqGfZuZ347jU3zcboebDafm/X78NH8mUi0je7TR/wOoTMaN22BbjQZsO/xlyGLptBjMhHaXUVVE5ch8UudUfMXxMXe1mpqVAR9O/UleFjMbU3FeVTil1Miq2jdWtKDdO05FjXBdvuaB0NiHS9DJPFmfjwmB4tQhGm2zBJwVf4b92C8h16IVinawSOSWcxDi4Kll+9xqnS2gByOeYWaWDzGA9t6iXMBAg3HTf6weiDv061LP3+AffQ4LyCSlBfERN8nCj37jJwYA4t/g8SKiWA6FmbAIYsJL2n7D3OFECZn2LOrwem8RNsnA3LejByribbi9Ho7iVa6sr138V4NMyXW4eyd0cSR+XhotbDSt0a439B2rWeUCHHghKlO+jKn4YwgIPtJclOuN7POyDGY9GWZ0yGW6ntMUM+gNVmHFoNxWNpm2JHlJQ+LICDPuD+lPmKo9MjtFHnMr7GSZV6ZtfXCQZoHaLIEJHKpQ9gMP/a8Uzk+PWvnBmS/I37E6FBbb+xyysGkl/bpn5BysHBxX9Kpcz+7ArHSUwMOiOklV+N96R/1cir1fY1hDssskP8RIXVbmFJprJfBkTUfj11tz9L7zRF+CckjBjWuyuX5OpjE0obr1ensnVNAuoxzWPqIccw6ccvW6yUuQzgFJLcl1/kJM51XlOFL9KUOp22Wzj6HZY6yBKSKEeG0hmR6MdDpSwg2IIGIGGMNpkRNLFpABLkq1BdnBiTwEGYOyxu2plY6flDDEeK9/oC+kM4PyEocD7c7fBE9bggBEaPQT7yhWi/D5IxoHrncNOJRjHsQAiLi/JL+wth6IwH5FNDD5bWIH7NGBWQpyPqRRreydCzcm5YQtF8I/+ESE+F1HPffaFtFhoA4omt46K8z8pre+xR4uC9Oez2foTeLvfn6NwQjijl9dWax18L55v23SUTQdNNFF3PBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBfzz+tAwKFIqRaWgAAAABJRU5ErkJggg==',
               name:'Tailwind css',
          },
     ]
     const Clints = [
          {
               compname:'Ledtvexpert',
               websitename:'ledtvexpert',
               websitelink:'https://ledtvexpert.netlify.app/',
               happy:true,
               discription:'LedTVExpert is a leading online platform specializing in LED TV sales and services. We offer a wide range of high-quality LED TVs from top brands, ensuring the best viewing experience for our customers. Our expert team provides reliable installation and repair services, making us a trusted choice for all your LED TV needs.',
          },
          {
               compname:'Seprate digital',
               websitename:'sepratedigital',
               websitelink:'https://separatedigital.netlify.app/',
               happy:true,
               discription:'Seprate Digital is a dynamic digital marketing agency dedicated to helping businesses thrive in the online world. We specialize in creating tailored digital marketing strategies that drive results, from SEO and social media management to content creation and PPC advertising. Our team of experts is committed to delivering innovative solutions that enhance brand visibility and engagement.',
          },
     ]

     const plinks = [
          {
               title:'Github',
               link:'https://github.com/Abhay7111',
               icon:'ri-github-line',
          },
          {
               title:'facebook',
               link:'',
               icon:'ri-facebook-fill',
          },
          {
               title:'instagram',
               link:'',
               icon:'ri-instagram-line',
          },
          {
               title:'Linkedin',
               link:'https://www.linkedin.com/in/abhay-vishwakarma-a72005259/',
               icon:'ri-linkedin-line',
          },
          {
               title:'Twitter',
               link:'',
               icon:'ri-twitter-line',
          },
          {
               title:'Youtube',
               link:'https://www.youtube.com/@gaamagaming8682',
               icon:'ri-youtube-line',
          },
          {
               title:'Whatsapp',
               link:'https://wa.me/+917408638739',
               icon:'ri-whatsapp-line',
          },
          
     ]

     const [infoopen, setinfoopen] = useState(null);
     const [adddatalength, setadddatalength] = useState(4);
     const loopdata = data.slice(0, + adddatalength);
  return (
    <div className='w-dvw h-dvh bg-white p-2 flex items-start justify-center'>
     <div className=' 2xl:w-[50%] xl:w-[60%] lg:w-[70%] w-full h-full bg-zinc-50 overflow-auto transition-all duration-300'>
          <div className=' flex flex-col gap-2 p-2'>
               {/* card 1st */}
               <div className='w-full h-fit pb-8 bg-transparent p-1 flex flex-col gap-4 items-center md:items-start'>
                    <h1 className='text-2xl font-medium'>Hy, I'm <a href="https://github.com/Abhay7111">Abhay7111</a></h1>
                    <p className='text-sm opacity-75 text-center md:text-start'>My portfolio demonstrates my expertise in fullstack web development, where I seamlessly blend captivating UI/UX design with powerful backend functionality to create dynamic and user-centric digital experiences.</p>
                    <span className='w-fit flex items-start justify-start'>
                         {plinks.map((items) => (
                              <span>
                                   {items.link && <a href={items.link} target='_blank' className='text-xl px-2.5 font-medium opacity-80 hover:text-shadow-sm text-shadow-zinc-400 transition-all duration-300'><i className={items.icon}></i></a>}
                              </span>
                         ))}
                         
                    </span>
               </div>
               {/* 2nd */}
                    <h1 className='text-2xl font-semibold uppercase mb-3 w-full flex items-center justify-between'>Projects <span className='relative'><i onClick={() => setinfoopen ((prev) => !prev)} className='ri-information-line text-lg font-light cursor-pointer'></i>
                         {infoopen && <div className='w-fit h-fit z-50 p-3 rounded-lg bg-white border border-zinc-200 absolute right-0 top-full mt-1'>
                                   <span className='flex items-center justify-start gap-2'>
                                        <p className='text-sm font-light lowercase'>true</p>
                                        <div className='size-2 bg-green-400 rounded-full'></div>
                                        <p className='text-sm font-light lowercase'>false</p>
                                        <div className='size-2 bg-red-400 rounded-full'></div>
                                   </span>
                                   <div className='flex flex-col items-start gap-1 lowercase text-sm font-light mt-2'>
                                        <p className='text-nowrap'>1. frontend</p>
                                        <p className='text-nowrap'>2. backend</p>
                                        <p className='text-nowrap'>3. full-stack</p>
                                   </div>
                              </div>}
                    </span></h1>
               {loopdata.map((items, index) => (
                    <div className='w-full h-fit pb-6 p-1 flex flex-col gap-2'>
                         <div className='flex items-center justify-between'>
                              <h1 className='text-xl font-medium flex items-center gap-2'>{items.title} <span className='flex items-center gap-1'><p className={`${items.frontend ? 'bg-green-400' : 'bg-red-400'} size-1.5 rounded-full`}></p><p className={`${items.backend ? 'bg-green-400' : 'bg-red-400'} size-1.5 rounded-full`}></p><p className={`${items.fullstack ? 'bg-green-400' : 'bg-red-400'} size-1.5 rounded-full`}></p></span></h1>
                              <span className='flex items-center gap-3 pr-5'>{items.repo && <a href={items.repo} className='text-sm font-medium opacity-80 hover:text-shadow-sm text-shadow-zinc-400 transition-all duration-300'>Repo <i class="ri-git-repository-line"></i></a>}{items.links && <a href={items.links} className='text-sm font-medium opacity-80 hover:text-shadow-sm text-shadow-zinc-400 transition-all duration-300'>View <i class="ri-arrow-right-up-box-line"></i></a>}</span>
                         </div>
                         <p className='line-clamp-2 text-sm opacity-75'>{items.discription}</p>
                         <span className='flex items-center gap-x-3 gap-y-1 opacity-85 font-medium flex-wrap text-sm'>{items.tech.map((items) => (<span>{items}</span>))}</span>
                         <span className='text-xs'>{items.date}</span>
                    </div>
               ))}
               <div className='w-full h-fit flex items-center justify-center'>
                    <button onClick={()=>setadddatalength(prev => prev === 0 ? 1 : prev * 2 )} className='text-sm font-medium py-1 bg-transparent hover:bg-zinc-200 cursor-pointer px-2 rounded-md border border-zinc-200 hover:border-zinc-300 active:scale-[0.97] transition-all'>Show More Experience <i className='ri-arrow-drop-down-line'></i></button>
               </div>
               <div className='w-full h-fit'>
                    <h1 className='text-xl font-semibold uppercase mb-2 p-2'>All learned tools</h1>
                    <div className='w-full h-fit flex items-center justify-center gap-3 flex-wrap'>
                         {toolslogo.map((items) => (
                              <div className='flex flex-col items-center justify-center gap-2'>
                                   <img src={items.img} alt="404" className='size-10 rounded-md object-cover' />
                                   <p className='text-sm'>{items.name}</p>
                              </div>
                         ))}
                    </div>
               </div>
               <div className='w-full h-fit mb-2'>
                    <h1 className='text-xl font-semibold uppercase mb-3 p-2'>My clints</h1>
                    <div className='w-full h-fit grid md:grid-cols-3 grid-cols-2 items-center justify-center gap-3 flex-wrap'>
                         {Clints.map((items, index) => (
                              <div className='w-full h-fit bg-zinc-200 rounded-md border border-zinc-300'>
                                   <div className='w-full h-full flex flex-col items-start justify-start p-2 gap-2'>
                                        <h1 className='text-lg font-medium'>{items.compname}</h1>
                                        <span className='flex items-center justify-start gap-2'>
                                             <a href={items.websitelink} target='_blank' className='text-sm font-medium opacity-80 hover:text-shadow-sm text-shadow-zinc-400 transition-all duration-300'>{items.websitename} <i class="ri-arrow-right-up-box-line text-xs"></i></a>
                                        </span>
                                        <p className='line-clamp-2 text-sm font-mono opacity-70'>{items.discription}</p>
                                        {items.happy ? <span className='text-lg font-medium'><i class="ri-emotion-happy-line text-green-600"></i></span> : <span><i class="ri-emotion-unhappy-line text-red-600"></i></span>}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     </div>
    </div>
  )
}

export default home