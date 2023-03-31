import React from 'react'
import RoadmapTemplate from '../template/RoadmapTemplate'
import TextAnimSkew from '../anim/TextAnimSkew'
import { roadmapList } from '../utils/RoadmapList'
import TextAnim from '../anim/TextAnim'

const Roadmap = () => {
    return (
        <main className='w-full px-8 md:px-10 h-auto pt-20 relative z-10' id="roadmap">

            <img src="/circles.webp" alt="circles" className=" absolute right-0 top-0 lg:block hidden opacity-80" />

            <img src="/circles.webp" alt="circles" className=" absolute left-0 bottom-0 lg:block hidden opacity-80 rotate-180" />


            <div className='w-[20rem] h-[20rem] bg-wht/30 rounded-full blur-[150px] absolute left-0 top-0 bottom-0 my-auto opacity-80' />
            <div className='w-[20rem] h-[20rem] bg-wht/20 rounded-full blur-[150px] absolute right-0 bottom-32 opacity-80' />

            <div className="max-w-[1300px] w-full mx-auto text-center skew-x-6 lg:text-6xl sm:text-4xl text-2xl font-[800]">
                <TextAnimSkew>
                    <h1 className="stroke opacity-20">EARN PROTOCOL PATH</h1>
                </TextAnimSkew>

                <TextAnimSkew>
                    <h1 className=''>ROADMAP</h1>
                </TextAnimSkew>
            </div>


            <div className='max-w-[1500px] mx-auto pb-32 pt-3 flex flex-col gap-y-10 relative z-10 mt-10'>
                <div className="text-center">

                    <div className="mt-10 flex flex-col gap-y-10">

                        {roadmapList.map((items, i) => {
                            return (
                                <RoadmapTemplate num={i + 1} title={items.title} list={items.desc} key={i} />
                            )
                        })}

                    </div>

                </div>
            </div>
        </main>
    )
}

export default Roadmap