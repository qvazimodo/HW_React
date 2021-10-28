import React, { useEffect } from "react";
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

    return (
        <Switch>
            <Route path={["/chat/:roomId", "/chat"]}>


                        <MainTemplate
                            chats= {
                                <ListOfRooms/>}>
                            <Route path="/chat/:roomId">
                                <ListOfMessages  />
                            </Route>

                            < Route exact path="/chat" >
                                <h1>Выберите диалог</h1>
                            </Route>
                        </MainTemplate>


            </Route>




        </Switch>
    );
}
