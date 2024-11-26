import React from "react";

function Card({userName="Pruthvi"}) {
    return(
        <>
            <div className=" rounded overflow-hidden shadow-lg">
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <h2>{userName} </h2>
                            <p className="text-sm text-gray-600 flex items-center">
                                <img className="w-full"
                                    src="https://images.pexels.com/photos/29293191/pexels-photo-29293191/free-photo-of-charming-rural-farmhouse-with-autumn-foliage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Sunset in the mountains" />
                                Members only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        </div>
                        <div className="flex items-center">
                            
                            <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                    <p className="text-gray-600">Aug 18</p>
                                </div>
                        </div>
                    </div>
                </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
            </div>
        </>
    )
}

export default Card;