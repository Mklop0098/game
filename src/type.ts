import {ReactNode} from 'react'
// import { Socket } from "socket.io-client"

export type RegisterInputType = {
    phone: string
    name: string
}

export type LoginInputType = {
    phone: string
}

export type ToastType = {
    open: boolean,
    msg: string
}

export type SocketIoHookReturn = {
    // socket: Socket | undefined
}

export type MsgHookReturn = {
    activeChatList: ChatListType[]
    newMessage: boolean
    minimizeChatBoxList: ChatListType[]
    isReply: string,
    setIsReply: (reply: string) => void
    addChatList: (userId: string) => void
    minimizeChatBox: (userId: string) => void
    removeChatBox: (userId: string, state: 'active' | 'minimize') => void
    setNewMessage: (newMessage: boolean) => void
}

export type ChatListType = {
    userId: string,
}

export type UserHookReturn = {
    currentUser: UserType
    updateCurrentUser: (currentUser: UserType) => void
}

export type NotifyHookReturn = {
    notifies: NotifyType[],
    setNotifiesList: (notifies: NotifyType[]) => void
}

export type FriendHookReturn = {
    friendList: FriendArrayType[],
    requestList: FriendArrayType[],
    friendLoading: boolean,
    onlineFriends: string[],
    setOnlineFriends: (list: string[]) => void
    resetFriendContext: () => void,
    addOnlineFriend: (friend: string) => void
    removeOnlineFriend: (friend: string) => void
}

export type NotifyType = {
    notifyMsg: string,
    type: string,
    createAt: Date,
    readed: boolean
    from: string
}

export type UserType = {
    name: string
    phone: string
    id: number
}

export type FriendArrayType = {
    friendId: string
}

export type MessageReturnType = {
    fromSelf: boolean
    message: string
    imgs: string[]

}

export type ModalContextProviderReturn = {
    showModal: (modal: ModalType) => void,
    hideModal: () => void,
};

export type ModalType = {
    body: ReactNode,
    toggle: boolean,
    width?: number,
    height?: number,
    root?: string,
    onClick?: <T>(args?: T) => void
};


export type ReactType = {
    userId: string
}
