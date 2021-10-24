import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import {
    ListOfMessages,
    ListOfRooms,
    MainTemplate,
    ProviderMessage,
} from "../components";

// @TODO
// const messages =  {
//   room1: [],
//   room2: [],
// }
// messages[roomId]

export function ChatPage() {
    const { push } = useHistory();

    useEffect(() => {
        const listenExistChat = ({ code }) => {
            if (code === "Escape") {
                push("/chat");
            }
        };

        document.addEventListener("keydown", listenExistChat);

        return () => {
            document.removeEventListener("keydown", listenExistChat);
        };
    }, [push]);

    return (
        <Switch>
            <Route path={["/chat/:roomId", "/chat"]}>
                <ProviderMessage>
                    {([state, actions]) => (
                        <MainTemplate  chats={<ListOfRooms
                            {...state}
                            createConversation={actions.createConversation}
                        />}>
                            <Route path="/chat/:roomId">
                                <ListOfMessages {...state}
                                                sendMessage={actions.sendMessage}
                                                handleChangeValue={actions.handleChangeValue} />
                            </Route>

                            < Route exact path="/chat" >
                                <h1>Выберите диалог</h1>
                            </Route>
                        </MainTemplate>
                       )}
                </ProviderMessage>
            </Route>
        </Switch>
    );
}
