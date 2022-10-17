import {useIsLoggedOut, useLogout, useProfile, useUsername} from "../hooks/auth";
import {FC, useCallback, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {DataState} from "../api/api-hook";
import {
    MessageContext,
    useAddContact,
    useContacts,
    useMessages,
    useSelectContact,
    useSendMessageToContact
} from "../hooks/chat";
import moment from "moment"

const Contact : FC<{username: string, selected: boolean}> = ({username, selected}) => {
    const profile = useProfile(username)
    if (profile === DataState.Errored || profile === DataState.Loading) {
        return <></>
    }
    return <div className={"w-full text-left rounded p-2 focus:outline-none focus-visible:bg-indigo-50 " + (selected ? "bg-gray-100" : "cursor-pointer")}>
        <div className="flex items-center">
            <img className="rounded-full items-start flex-shrink-0 mr-3"
                 src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                 width="32" height="32" alt="Name5"/>
            <div>
                <h4 className="text-sm font-semibold text-gray-900">{profile.first_name} {profile.last_name}</h4>
                <a className="block text-sm font-medium hover:text-indigo-500">@{username}</a>
            </div>
        </div>
    </div>

}

const ReceivedMessage : FC<{text: string, timestamp: number}> = ({text, timestamp}) => {
    return <div className="flex w-full mt-2 space-x-3 max-w-xs">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
        <div>
            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">{text}</p>
            </div>
            <span className="text-xs text-gray-500 leading-none">{moment(timestamp).fromNow()}</span>
        </div>
    </div>
}

const SentMessage : FC<{text: string, timestamp: number}> = ({text, timestamp}) => {
    return <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
        <div>
            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">{text}</p>
            </div>
            <span className="text-xs text-gray-500 leading-none">{moment(timestamp).fromNow()}</span>
        </div>
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"/>
    </div>
}

const AddContactModal : FC<{visible: number}> = ({visible}) => {
    const [actuallyVisible, setActuallyVisible] = useState(false)
    const [username, setUsername] = useState('')
    const addContact = useAddContact(username)
    const close = useCallback(() => {
        setActuallyVisible(false)
        addContact.reset()
        setUsername('')
    }, [addContact])

    const send = useCallback(() => {
        addContact.send()
    }, [addContact])

    useEffect(() => {
        if (addContact.sent) {
            close()
        }
    }, [addContact.sent])

    useEffect(() => {
        if (visible) {
            setActuallyVisible(true)
        }
    }, [visible])

    return <div onClick={close}
        className={"absolute top-0 left-0 h-screen w-screen bg-opacity-50 bg-black " + (actuallyVisible ? "" : "hidden")}>
        <div onClick={e => e.stopPropagation()} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg min-w-[calc(100vw/3)]">
                <h3 className="text-2xl font-bold text-center">Add a contact</h3>
                <div className="mt-4">
                    <div>
                        <label className="block">Username</label>
                        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} value={username}
                               className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                </div>
                <div className="flex">
                    <button onClick={send}
                            className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Add Contact
                    </button>
                </div>
            </div>
        </div>
    </div>
}

function IndexView() {
    const logout = useLogout()
    const navigate = useNavigate()
    const loggedOut = useIsLoggedOut()
    const username = useUsername()
    const profile = useProfile(typeof username === "string" ? username : "")
    const contacts = useContacts()
    const bottomRef = useRef<HTMLDivElement>(null)
    const selectedContact = useSelectContact()
    const messages = useMessages()
    const [addContactVisible, setAddContactVisible] = useState(0)
    const [messageText, setMessageText] = useState("")
    const sendMessageToContact = useSendMessageToContact(selectedContact.value, {text: messageText})
    useEffect(() => {
        if (loggedOut) {
            navigate("/login")
        }

        if (logout.sent) {
            navigate("/login")
        }
    }, [logout.sent, loggedOut])

    useEffect(() => {
        if (contacts === DataState.Loading || contacts === DataState.Errored) {
            return
        }

        if (selectedContact.value === "" && contacts.length > 0) {
            selectedContact.set(contacts[0])
        }
    }, [contacts])

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages.length]);

    const logoutCallback = useCallback(() => {
        logout.send()
    }, [logout])

    if (contacts === DataState.Loading || contacts === DataState.Errored) {
        return <></>
    }
    if (profile === DataState.Loading || profile === DataState.Errored) {
        return <></>
    }


    return <div className="flex flex-row bg-gray-100">
        <section className="flex flex-col antialiased text-gray-600 p-4 h-screen">
            <div className="h-full ">
                <div className="relative h-[calc(100vh-3.5rem)] max-w-[380px] mx-auto bg-white shadow-lg rounded-lg">
                    <header className="pt-6 pb-4 px-5 border-b border-gray-200">
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center">
                                <a className="inline-flex items-start mr-3" href="">
                                    <img className="rounded-full"
                                         src="https://raw.githubusercontent.com/ViralJT/assets/master/human.jpg"
                                         width="48" height="48" alt="Jordan Trpeski"/>
                                </a>
                                <div className="pr-1">
                                    <a className="inline-flex text-gray-800 hover:text-gray-900">
                                        <h2 className="text-xl leading-snug font-bold">{profile.first_name} {profile.last_name}</h2>
                                    </a>
                                    <a className="block text-sm font-medium hover:text-indigo-500">@{username}</a>
                                </div>
                            </div>
                            <div className="relative inline-flex flex-shrink-0">
                                <button onClick={logoutCallback}
                                    className="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                                    <span className="sr-only">Logout</span>
                                    <svg className="h-4 w-4 text-black" width="24" height="24" viewBox="0 0 24 24"
                                         strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <path
                                            d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/>
                                        <path d="M7 12h14l-3 -3m0 6l3 -3"/>
                                    </svg>
                                </button>

                            </div>
                            <div className="relative inline-flex flex-shrink-0">
                                <button onClick={() => setAddContactVisible(i => i + 1)}
                                    className="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                                    <span className="sr-only">Add Contact</span>
                                    <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                            {profile.bio}
                        </div>
                    </header>
                    <div className="py-3 px-5">
                        <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>
                        <div className="divide-y divide-gray-200 flex-col flex overflow-auto h-[calc(100vh-17rem)]">
                            {
                                contacts.map(contact => <Contact key={contact}
                                                                 selected={selectedContact.value === contact}
                                                                 username={contact}/> )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section
            className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-800 pt-4 pr-4 pb-10 ">

            <div className="flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                    {
                        messages.map(message => {
                            if (message.sender === username) {
                                return <SentMessage key={message.id} timestamp={message.sent_at} text={message.value.text}/>
                            } else {
                                return <ReceivedMessage key={message.id} timestamp={message.sent_at} text={message.value.text}/>
                            }
                        })
                    }
                    <div ref={bottomRef} />
                </div>
                <div className="bg-white p-4">
                    <input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" onKeyPress={e => {
                        if (e.key === "Enter") {
                            sendMessageToContact.send()
                            setMessageText("")
                        }
                    }} onChange={e => setMessageText(e.target.value)} value={messageText}
                           placeholder="Type your message…"/>
                </div>
            </div>
        </section>

        <AddContactModal visible={addContactVisible}/>
    </div>
}

function Index() {
    return <MessageContext>
        <IndexView/>
    </MessageContext>
}

export default Index