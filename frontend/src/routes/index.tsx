function Index() {
    return <div className="flex flex-row bg-gray-100">
        <section className="flex flex-col  antialiased text-gray-600 p-4 h-screen">
            <div className="h-full ">
                <div className="relative h-[calc(100vh-3.5rem)] max-w-[380px] mx-auto bg-white shadow-lg rounded-lg">
                    <header className="pt-6 pb-4 px-5 border-b border-gray-200">
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center">
                                <a className="inline-flex items-start mr-3" href="#0">
                                    <img className="rounded-full"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="48" height="48" alt="Jordan Trpeski"/>
                                </a>
                                <div className="pr-1">
                                    <a className="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                        <h2 className="text-xl leading-snug font-bold">Jordan Trpeski</h2>
                                    </a>
                                    <a className="block text-sm font-medium hover:text-indigo-500"
                                       href="#0">@jordan.trpeski</a>
                                </div>
                            </div>
                            <div className="relative inline-flex flex-shrink-0">
                                <button
                                    className="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                                    <span className="sr-only">Settings</span>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                        <path
                                            d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                    </svg>
                                </button>

                            </div>
                            <div className="relative inline-flex flex-shrink-0">
                                <button
                                    className="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                                    <span className="sr-only">Open Chat</span>
                                    <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z"/>
                                </svg>
                                <span className="text-sm whitespace-nowrap ml-2">Location, SubLoc</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                                    <path
                                        d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z"/>
                                </svg>
                                <a className="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2"
                                   href="#0">123142</a>
                            </div>
                        </div>
                    </header>
                    <div className="py-3 px-5">
                        <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>
                        <div className="divide-y divide-gray-200 flex-col flex overflow-auto h-[calc(100vh-17rem)]">
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Test Test2</h4>
                                        <div className="text-[13px]">The video chat ended · 2hrs</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Test3</h4>
                                        <div className="text-[13px]">test123</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name3"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Hello this is patric</h4>
                                        <div className="text-[13px]">chat info like texted 2 hours a go</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name4"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">Test123</h4>
                                        <div className="text-[13px]">Hello mr viral</div>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                                <div className="flex items-center">
                                    <img className="rounded-full items-start flex-shrink-0 mr-3"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="32" height="32" alt="Name5"/>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">name</h4>
                                        <div className="text-[13px]">L</div>
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section
            className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-800 pt-4 pr-4 pb-10 ">

            <div className="flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
                        <div>
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
                        <div>
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
                        <div>
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                    </div>
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">Lorem ipsum dolor sit.</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
                    </div>
                </div>

                <div className="bg-white p-4">
                    <input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text"
                           placeholder="Type your message…"/>
                </div>
            </div>
        </section>
    </div>
}

export default Index