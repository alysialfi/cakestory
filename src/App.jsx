import { useEffect, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import handLeft from './assets/images/hero/hand-left.png'
import cakeLeft from './assets/images/hero/cake-left.png'
import cakeRight from './assets/images/hero/cake-right.png'
import cakeText from './assets/images/decorations/cake-text-bg.svg'
import storyText from './assets/images/decorations/story-text-bg.svg'
import frontShop from './assets/images/about/front.jpg'
import InsideShop from './assets/images/about/inside.jpg'
import menuShop from './assets/images/about/menu.jpg'
import paperBg from './assets/images/decorations/paper.png'
import leaves from './assets/images/decorations/leaves.png'
import flyingStrawberryBg from './assets/images/decorations/flying-strawberry-bg.png'
import runningCakesBg from './assets/images/decorations/running-cakes.png'
import paperLongBg from './assets/images/decorations/paper-long.png'
import leavesLong from './assets/images/decorations/leaves-long.png'
import loginBg from './assets/images/contact/login-bg.svg'

function App() {
    const [menu, setMenu] = useState([
        {
            name: 'cupcake',
            price: 15000
        },
        {
            name: 'mile crepes',
            price: 30000
        },
        {
            name: 'cheesecake',
            price: 35000
        },
        {
            name: 'fudgy brownies',
            price: 15000
        },
        {
            name: 'marble cake',
            price: 10000
        },
        {
            name: 'doughnut',
            price: 15000
        },
        {
            name: 'sourdough',
            price: 20000
        }
    ])
    for (let a of menu) {
        let b = a.makanan + a.price + '\n'
        console.log(b)
    }

    const menubaru = {
        name: 'geprek',
        price: 5000
    }
    menu.pop()
    const [formData, setFormData] = useState({username: '', password: ''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(`username: ${formData.username}, password: ${formData.password}`);
    };

    useEffect(() => {
        // hero section
        gsap.fromTo(['#hero-title', '#hero-subtitle'], {
            x: 0,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
        }, 0.2)
        gsap.fromTo('#hero-cake-text-bg', {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
        }, 0.2)
        gsap.fromTo('#hero-story-text-bg', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
        }, 0.2)
        gsap.fromTo(['#hero-hand-left'], {
            x: -50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
        }, 0.2)
        gsap.fromTo(['#hero-cake-left'], {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
        }, 0.2)
        gsap.fromTo(['#hero-cake-right'], {
            x: 50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1.5,
        }, 0.2)

        // about section
        gsap.fromTo(['#about-left'], {
            y: 500
        }, {
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#about-left"
            }
        })
        gsap.fromTo(['#about-right-top', '#about-bg-right'], {
            y: 400
        }, {
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#about-bg-top"
            }
        })
        gsap.fromTo(['#about-right-bottom',], {
            y: 200
        }, {
            y: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: "#about-right-bottom"
            }
        })

        // menu section
        gsap.timeline({
            scrollTrigger: {
                trigger: "#menu-running-cake-top",
                start: '10% 80%',
                end: 'bottom 10%',
                scrub: true,
            }
        }).to('#menu-running-cake-top', {
            x: -800
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: "#menu-running-cake-bottom",
                start: '10% 90%',
                end: 'bottom 10%',
                scrub: true,
            }
        }).to('#menu-running-cake-bottom', {
            x: 800
        })

        // order section
        gsap.fromTo(['#order-right'], {
            y: 300,
            opacity: 0
        }, {
            y: 0,
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: "#order-right"
            }
        })
    }, [])

    return (
    <>
        <section className='relative h-screen w-full flex justify-center items-center overflow-hidden'>
            {/* hero */}
            <div id='hero-all-cake-left'>
                <img id='hero-hand-left' src={handLeft} alt="" className='absolute left-0 bottom-28 md:bottom-10 w-1/2 md:w-fit' />
                <img id='hero-cake-left' src={cakeLeft} alt="" className='absolute left-12 bottom-40 md:bottom-24 w-1/2 md:w-fit' />
            </div>
            <img id='hero-cake-right' src={cakeRight} alt="" className='absolute right-0 top-32 md:top-10 w-1/2 md:w-fit' />
            <img id='hero-cake-text-bg' src={cakeText} className='absolute left-0 top-10' />
            <img id='hero-story-text-bg' src={storyText} className='absolute right-0 bottom-10' />
            <div className='text-center leading-none'>
                <h1 id='hero-title' className='font-extrabold text-6xl md:text-[154px]'>Cake Story</h1>
                <h2 id='hero-subtitle' className='font-medium text-2xl md:text-4xl'>Where Every Slice is a Chapter</h2>
            </div>
        </section>
        <section id='about-section' className='relative w-full overflow-hidden'>
            <div id='about-bg-right'>
                <img src={paperBg} alt="" className='absolute top-0 right-0 z-10' />
                <img src={leaves} alt="" className='absolute top-0 right-[27%] z-30 scale-75' />
            </div>
            <img src={flyingStrawberryBg} alt="" className='absolute bottom-20 left-1/2 right-1/2 -translate-x-1/2 translate-y-0 z-10 opacity-50 scale-125' />
            <div className='container mx-auto flex pt-20'>
                <div id='about-left' className='w-1/2'>
                    <div>
                        <h2 className='text-5xl font-semibold'>Cake Story</h2>
                        <p className='text-xl mt-4 w-3/6 leading-tight'>At Cake Story, we believe that every cake is a story waiting to be told. Whether it's a birthday cake for a loved one, a wedding cake for the happiest day of your life, or a simple treat to enjoy on a whim, our cakes are more than just desserts - they're delicious works of art that tell your unique story.</p>
                    </div>
                    <img id='about-front-shop' src={frontShop} alt="" className='mt-8' />
                    <div>
                        <p className='text-xl mt-8 w-3/6 leading-tight'>Whether you're looking for a classic cake like a chocolate fudge cake or a more unique creation like a red velvet cake with cream cheese frosting, we have something to satisfy everyone's taste buds. We also offer a wide variety of gluten-free, vegan, and other dietary restriction-friendly options.</p>
                        <p className='text-2xl mt-4'>-Every Slice is a Chapter-</p>
                    </div>
                </div>
                <div id='about-right' className='w-1/2'>
                    <div id='about-right-top' className='flex justify-center translate-x-10 relative z-20'>
                        <img id='about-menu-shop' src={menuShop} alt="" className='' />
                    </div>
                    <div id='about-right-bottom' className='flex justify-end translate-x-20 mt-20'>
                        <img id='about-inside-shop' src={InsideShop} alt="" className='' />
                    </div>
                </div>
            </div>
        </section>
        <section className='w-full h-full pt-20 overflow-hidden'>
            <div className='relative h-80 w-full'>
                <img src={cakeText} className='absolute left-0 top-10' />
                <img id='menu-running-cake-top' src={runningCakesBg} className='absolute -right-1/3 top-10' />
            </div>
            <div className='relative w-full h-screen my-10 flex items-center'>
                <img src={paperLongBg} alt="" className='absolute top-[35%]' />
                <img src={leavesLong} alt="" className='absolute right-0 top-[35%]' />
                <div className='container mx-auto'>
                    <h3 className='text-5xl font-semibold'>Our Menu</h3>
                    <div className='mt-20 relative z-30 grid grid-cols-2'>
                        {
                            menu.map((item, id) => {
                                return <div key={id} className='flex'>
                                    <p className='text-3xl leading-loose'>{item.name}</p>
                                    <div className='w-1/3 border-b border-orange-400 ml-4 mb-6'></div>
                                    <div className='flex items-center'>
                                        <span className='text-xl'><sup>Rp</sup></span>
                                        <p className='text-3xl'>{item.price}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='relative h-80 w-full'>
                <img src={storyText} className='absolute right-0 bottom-0' />
                <img id='menu-running-cake-bottom' src={runningCakesBg} className='absolute -left-1/3 bottom-0 -scale-y-100' />
            </div>
        </section>
        <section className='relative w-full h-screen pt-20'>
            <img src={flyingStrawberryBg} alt="" className='absolute bottom-0 right-20 z-10 opacity-50' />
            <div className='container mx-auto'>
                <h3 className='text-5xl font-semibold'>Order Us</h3>
                <div className='flex mt-8'>
                    <div className='bg-white rounded-md p-8 w-1/3 h-full'>
                        <form id='login-form' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-2 text-xl'>
                                <label htmlFor="username">Username</label>
                                <input type="text" id='username' name='username' value={formData.username} onChange={handleChange} className='border border-[#EF8B5D] bg-white px-2 py-1 rounded-md' />
                            </div>
                            <div className='flex flex-col gap-2 text-xl mt-8'>
                                <label htmlFor="password">Password</label>
                                <input type="text" id='password' name='password' value={formData.password} onChange={handleChange} className='border border-[#EF8B5D] bg-white px-2 py-1 rounded-md' />
                            </div>
                            <button type='submit' className='w-full mt-6 rounded-md bg-[#EF8B5D] text-white py-2 hover:bg-orange-500'>Login</button>
                        </form>
                    </div>
                    <div id='order-right' className='w-2/3 ml-10'>
                        <img src={loginBg} alt="" />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 bg-[#EF8B5D] h-10 w-full text-white flex justify-center items-center'>
                ©2023 copyright @cakestory
            </div>
        </section>
    </>
    )
}

export default App
