import { useState } from "react";


export const useModal = (initialState = false) => {
    const [visible, setVisible] = useState(initialState);

    const open = () => {
        setVisible(true);
    };
  
    const close = () => {
        setVisible(false);
    };

    return {visible, open, close}
}
