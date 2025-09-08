import React, { useState } from 'react';
import { toggleTheme } from '../theme';
import { Helmet } from 'react-helmet';

function home() {

     const [openExtra, setopenExtra] = useState();
     const data = [
          {
               title:'Prasa',
               discription:'I created a jewellery website with a clean, elegant design that beautifully showcases collections. The site is fully responsive, user-friendly, and highlights the brand’s identity while providing smooth navigation and a professional online presence.',
               links:'https://prasa-ruddy.vercel.app/',
               repo:'https://github.com/Abhay7111/prasa',
               tech:[
                    "React js",
                    "Tailwind CSS",
                    "Remix icon",
                    ],
               date:'Sep 24, 2024',
               fullstack:false,
               backend:false,
               frontend:true,
          },
          {
               title:'Blog',
               discription:'I developed a dynamic blog website, designed to provide a seamless platform for publishing engaging content and offering an intuitive reading experience for users.',
               links:'https://separatedigital.netlify.app/Blog',
               repo:'',
               tech:[
                    "React js",
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
          {
               title:'APIs',
               discription:'I designed and deployed APIs in Node.js to manage databases, handle authentication, and provide smooth communication between frontend and backend.',
               links:'https://abhay7111github.netlify.app/',
               repo:'private',
               tech:[
                    "Node js",
                    "Express js",
                    "Mongo DB",
                    ],
               date:'Mar 12, 2024',
               fullstack:false,
               backend:true,
               frontend:false,
          },
     ]
     const toolslogo = [
          {
               img:'data:image/png;base64,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',
               name:'HTML',
          },
          {
               img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/960px-Official_CSS_Logo.svg.png',
               name:'CSS',
          },
          {
               img:'data:image/png;base64,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',
               name:'Tailwind css',
          },
          {
               img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s',
               name:'JavaScript',
          },
          {
               img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAS1BMVEX///+k3Op3zeGN1OXM6/Pc8feX2Oec2ej0+/xix958z+LH6fKz4e1YxNzk9Phvy+BJwNrA5vCF0eTR7fS34+4/vtno9vkzvNfx+vwXKPc3AAABEklEQVR4AbXRRaLdMAxA0Rsy21JASfa/0j6n7efpPwMzSvyyYZzmXi9u9IHPYsql1hZEhzwpn6zxKVWHXm8DH02ll7vW46kjH40ZWOwMugJN+SjNtKziXLJ14ax8tEWrupUXZ/WKkXerVWGtPNLAVK28bavLqdgCd4Nw3bKfUXiUCFTZYDBLr1IMSBOdLkCxk2C16g460Q+gswYcFrj75AzV83KFXvoRiNGDMxU4qv4b7URCsPs6Ydmfk+LOpIEH/pKRIjzchBObeBNGtdGGed/nYqNqPPkg5TsPGkXE/Hq2ykfjDGQNxOF74Lejl6WK+yFlx9jLRW3utXd8or7tyeZFJbdy3XxybxoLL4fo2PhVfwB6eg3nGSu+JgAAAABJRU5ErkJggg==',
               name:'React js',
          },
          {
               img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9K8fG9x0f5o4-JYZBzsrKwv9lV_cFgeyxA&s',
               name:'Node js',
          },
          {
               img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s',
               name:'Mongo DB',
          },
          {
               img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpCVrym3sQKRS3_hAnLQIocLuMJorvv0Jiw&s',
               name:'Express js',
          },
          {
               img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png',
               name:'C',
          },
          {
               img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/250px-ISO_C%2B%2B_Logo.svg.png',
               name:'C++',
          },
          {
               img:'https://cdn.prod.website-files.com/5f10ed4b2ae6bc09c03f5d7a/64959d5f65a257fb51a4259c_github.png',
               name:'GitHub',
          },
          {
               img:'https://avatars.githubusercontent.com/u/18133?s=200&v=4',
               name:'Git',
          },
          {
               img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/1200px-Netlify_logo_%282%29.svg.png',
               name:'Git',
          },
          {
               img:'https://images.ctfassets.net/crb83veve8xb/2YfNwMlyl1U0DLVXRgL8TB/9e8474e083f2ba01a296343d84f2282d/vercel_thumbnail.webp',
               name:'Vercel',
          },
          {
               img:'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
               name:'Leet code',
          },
          {
               img:'https://img.favpng.com/8/7/2/google-adwords-logo-google-ads-logo-design-baWVwp2c.jpg',
               name:'Google ads',
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
          {
               title:'Resume',
               link:'https://ik.imagekit.io/xpzegfs4i/Abhay%20vishwakarma%20Resume.pdf?updatedAt=1757361459451',
               icon:'ri-file-line',
          },
          
     ]

     const [infoopen, setinfoopen] = useState(null);
     const [adddatalength, setadddatalength] = useState(6);
     const loopdata = data.slice(0, + adddatalength);
  return (
    <div className='w-dvw h-dvh bg-white dark:bg-zinc-900 p-2 flex items-start justify-center transition-colors duration-300'>
     <Helmet>
          <title>Abhay7111</title>
          <meta name="description" content="This is abhay7111's portfolio." />
          <meta name="keywords" content="abhay7111, abhay7111 portfolio, portfolio, abhay vishwakarma, abhay vishwakarma portfolio, abhay portfolio, abhay, github clone" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </Helmet>
     <div className=' 2xl:w-[50%] xl:w-[60%] lg:w-[70%] w-full h-full bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 overflow-auto transition-colors duration-300 relative'>
          <div className=' flex flex-col gap-2 p-2'>
               {/* card 1st */}
               <div className='w-full h-fit pb-8 bg-transparent p-1 flex flex-col gap-4 items-center md:items-start'>
                    <div className='w-full flex items-center justify-center gap-2'>
                         <h1 className='text-3xl font-semibold dark:text-zinc-300'><span className='text-2xl font-medium dark:text-zinc-400'>Hye,</span> I'm <a href="https://github.com/Abhay7111">Abhay7111</a></h1>
                         <button onClick={toggleTheme} className='text-sm cursor-pointer font-medium size-8 rounded-md transition-colors absolute top-0 right-0'>
                              <span className='hidden dark:inline'><i className='ri-sun-line text-xl'></i></span>
                              <span className='inline dark:hidden'><i className='ri-moon-line text-xl'></i></span>
                         </button>
                    </div>
                    <p className='text-sm opacity-75 text-center md:text-start dark:text-zinc-300 dark:font-light'>My portfolio highlights my expertise in full-stack web development, where I combine engaging UI/UX design with strong Node.js backend APIs to deliver dynamic, user-focused digital experiences.</p>
                    <span className='w-fit flex items-start justify-start lg:'>
                         {plinks.map((items) => (
                              <span>
                                   {items.link && <a href={items.link} target='_blank' className='text-xl px-2.5 font-medium opacity-80 hover:text-shadow-sm text-shadow-zinc-400 transition-all duration-300'><i className={items.icon} title={items.title}></i></a>}
                              </span>
                         ))}
                         
                    </span>
               </div>
               {/* 2nd */}
                    <h1 className='text-2xl font-semibold uppercase mb-3 w-full flex items-center justify-between'><span className='dark:text-zinc-300'>Projects</span> <span className='relative'><i onClick={() => setinfoopen ((prev) => !prev)} className='ri-information-line text-lg font-light cursor-pointer'></i>
                         {infoopen && <div className='w-fit h-fit z-50 p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 absolute right-0 top-full mt-1'>
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
                    <div className='w-full flex flex-wrap'><h3 className='text-sm font-light'>Number of projects : <span className='text-sm font-medium'>{data.length}</span></h3></div>
               {loopdata.map((items, index) => (
                    <div className='w-full h-fit pb-6 p-1 flex flex-col gap-2'>
                         <div className='flex items-center justify-between'>
                              <h1 className='text-xl font-medium flex items-center gap-2'>
                                   <span className='dark:text-zinc-100'>{items.title}</span>
                                   <span title={items.fullstack ? "fullstack" : items.backend ? "backend" : items.frontend ? "frontend" : ""} className='flex items-center gap-1 ml-2'>
                                        <p className={`${items.frontend ? 'bg-green-400' : 'bg-red-400'} size-1.5 rounded-full`}></p>
                                        <p className={`${items.backend ? 'bg-green-400' : 'bg-red-400'} size-1.5 rounded-full`}></p>
                                        <p className={`${items.fullstack ? 'bg-green-400' : 'bg-red-400'} size-1.5 rounded-full`}></p>
                                   </span>
                              </h1>
                              <span className='flex items-center gap-3 pr-5'>
                                   {items.repo && <a href={items.repo} className='text-sm font-medium opacity-80 hover:text-shadow-sm text-shadow-zinc-400 transition-all duration-300'>{items.repo === 'private' ? 'private' : 'Repo'} <i className="ri-git-repository-line"></i></a>}
                                   {items.links && <a href={items.links} className='text-sm font-medium opacity-80 hover:text-shadow-sm text-shadow-zinc-400 transition-all duration-300'>View <i className="ri-arrow-right-up-box-line"></i></a>}
                              </span>
                         </div>
                         <p className='text-sm opacity-75 dark:text-zinc-200 dark:font-light'>{items.discription}</p>
                         <span className='flex items-center gap-x-3 gap-y-1 opacity-85 font-medium flex-wrap text-sm dark:font-light dark:text-zinc-500'>{items.tech.map((tech, i) => (<span key={i}>{tech}</span>))}</span>
                         <span className='text-xs dark:text-zinc-500'>{items.date}</span>
                    </div>
               ))}

               {/* More projects button */}
               <div className='w-full h-fit flex items-center justify-center'>
                    <button onClick={()=>setadddatalength(prev => prev === 0 ? 1 : prev * 2 )} className='text-sm font-medium py-1 bg-transparent hover:bg-zinc-200 cursor-pointer px-2 rounded-md border border-zinc-400 hover:border-zinc-300 dark:hover:text-zinc-800 active:scale-[0.97] transition-all'>More projects <i className='ri-arrow-drop-down-line'></i></button>
               </div>

               {/* clints */}
               <div className='w-full h-fit mb-2'>
                    <h1 className='text-xl font-semibold uppercase mb-3 p-2'>My happy clints</h1>
                    <div className='w-full h-fit grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-3 flex-wrap'>
                         {Clints.map((items, index) => (
                              <div className='w-full h-full bg-gradient-to-tl bg-[#FFE797] dark:bg-zinc-900 rounded-md border border-zinc-300 dark:border-zinc-700'>
                                   <div className='w-full h-full flex flex-col items-start justify-start p-2 gap-2'>
                                        <h1 className='text-xl  dark:text-zinc-200 font-medium'>{items.compname}</h1>
                                        <span className='flex items-center justify-start gap-2'>
                                             <a href={items.websitelink} target='_blank' className='text-sm font-medium opacity-80 hover:text-shadow-sm text-shadow-zinc-400 transition-all duration-300'>{items.websitename} <i class="ri-arrow-right-up-box-line text-xs"></i></a>
                                        </span>
                                        <p className='line-clamp-7 text-sm font-mono opacity-70 dark:text-zinc-400'>{items.discription}</p>
                                        <div className='w-full flex items-center justify-start gap-1'>
                                        {items.happy ? <span className='text-lg font-medium'><i class="ri-emotion-happy-line text-green-500"></i></span> : <span><i class="ri-emotion-unhappy-line text-red-500"></i></span>}
                                        <a href={items.websitelink} target='_blank' className='text-sm font-medium opacity-80 hover:text-shadow-sm text-shadow-zinc-600 dark:text-shadow-blue-600 transition-all duration-300 dark:text-blue-400'><i class="ri-link text-xl"></i></a>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>

               {/* Tools */}
               <div className='w-full h-fit'>
                    <h1 className='text-xl font-semibold uppercase mb-2 p-2'>All learned tools</h1>
                    <div className='w-full h-fit grid grid-cols-4 md:grid-cols-8 items-center justify-center gap-2'>
                         {toolslogo.map((items) => (
                              <div title={items.name} className='flex flex-col items-center justify-center gap-2'>
                                   <img src={items.img} alt="404" className='h-10 w-fit rounded-md object-cover bg-zinc-50 p-1' />
                                   <p className='text-sm'>{items.name}</p>
                              </div>
                         ))}
                    </div>
               </div>
               
               <div className='w-full flex items-center justify-center'><span onClick={()=>setopenExtra((open) => !open)} className='cursor-pointer px-3 py-1 rounded-md bg-transparent hover:bg-zinc-200 border border-zinc-300 text-zinc-400 hover:text-zinc-700 mt-10 transition-all duration-200 text-sm flex items-center justify-center'>Extra Information <i class={` text-xl ${!openExtra ? 'ri-arrow-drop-down-fill' : 'ri-arrow-drop-up-fill'}`}></i></span></div>
               {/* Extra */}
               {<div className={`w-full ${openExtra ? 'h-40' : 'h-0'} overflow-hidden transition-all duration-300 mt-5 flex items-center justify-center`}>
                    <img 
                    src={`https://camo.githubusercontent.com/82a9ec9693ac5c3cdb091abbc09e474c744d1989784b9095e51aa460bab44549/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d616268617937313131266c61796f75743d636f6d70616374`}
                    className='w-fit object-cover' />
               </div>}
          </div>
     </div>
    </div>
  )
}

export default home