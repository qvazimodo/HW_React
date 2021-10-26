import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import {
    ListOfMessages,
    ListOfRooms,
    MainTemplate,
    // ProviderMessage,
} from "../components";


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
    //@TODO поправить чат
    return (
        <Switch>
            {/*<Route path={["/chat/:roomId", "/chat"]}>*/}
            {/*    <ProviderMessage>*/}
            {/*        {([state, actions]) => (*/}
            {/*            <MainTemplate  chats={<ListOfRooms*/}
            {/*                {...state}*/}
            {/*                createConversation={actions.createConversation}*/}
            {/*            />}>*/}
            {/*                <Route path="/chat/:roomId">*/}
            {/*                    <ListOfMessages {...state}*/}
            {/*                                    sendMessage={actions.sendMessage}*/}
            {/*                                    handleChangeValue={actions.handleChangeValue} />*/}
            {/*                </Route>*/}

            {/*                < Route exact path="/chat" >*/}
            {/*                    <h1>Выберите диалог</h1>*/}
            {/*                </Route>*/}
            {/*            </MainTemplate>*/}
            {/*           )}*/}
            {/*    </ProviderMessage>*/}
            {/*</Route>*/}
            <Route path={["/chat/:roomId", "/chat"]}>
                <MainTemplate  chats={<ListOfRooms/>} >
                    <Route path="/chat/:roomId">
                        <ListOfMessages/>
                    </Route>
                    <Route exact={true} path="/chat">
                        <h1>выберите сообщение</h1>
                    </Route>
                    </MainTemplate>

            </Route>
            <Route path="*">
                <h1>такого чата нет</h1>
            </Route>



        </Switch>
    );
}
