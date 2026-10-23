/// <reference types="vite/client" />


declare global {
    interface GlobalEventHandlersEventMap {
        'hci:select-subject': CustomEvent<string>;
    }
}
