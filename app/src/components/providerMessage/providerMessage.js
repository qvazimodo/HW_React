import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";


export function ProviderMessage({ children }) {
    const { roomId } = useParams();


    const [conversations, setConversations] = useState([
        { title: "Red", value: "" },
        { title: "Zlobin", value: "" },
    ]);
    const [messageList, setMessageList] = useState({
        Red: [{ text: "Red", author: "Bot", id: new Date() }],
        Zlobin: [{ text: "Zlobin", author: "Bot", id: new Date() }],
    });

    const updateConversationsValue = useCallback(
        (value = "") => {
            setConversations((conversations) => {
                return conversations.map((conversation) => {
                    return conversation.title === roomId
                        ? { ...conversation, value }
                        : conversation;
                });
            });
        },
        [roomId]
    );

    const state = useMemo(() => {
        return {
            messageList: messageList[roomId] ?? [],
            value: "", // придумать как получить значение текущей комнаты
            conversations,
            allMessageList: messageList,
        };
    }, [roomId, messageList, conversations]);

    const actions = useMemo(() => {
        return {
            handleChangeValue: (e) => {
                const value = e?.target?.value ?? "";

                updateConversationsValue(value);
            },
            createConversation: () => {
                const title = prompt("введите название беседы:");

                setConversations((conversations) => [
                    ...conversations,
                    { title, value: "" },
                ]);
            },
            sendMessage: (message) => {
                const newMessage = { ...message, id: new Date() };

                 setMessageList((messageList) => {
                    return {
                        ...messageList,
                        [roomId]: [...(messageList[roomId] ?? []), newMessage],
                    };
                });
                updateConversationsValue();
            },
        };
    }, [roomId, updateConversationsValue]);

    useEffect(() => {
        const messagesByRoomId = messageList[roomId] ?? [];
        const lastMessage = messagesByRoomId[messagesByRoomId.length - 1];
        let timerId = null;

        if (lastMessage?.author === "User") {
            timerId = setTimeout(() => {
                actions.sendMessage({author: "Bot", text: "What do you want for me?"});
            }, 500);
        }

        return () => clearInterval(timerId);
    }, [messageList, roomId, actions]);

    return children([state, actions]);
}