
// type TButton ={
//     children : React.ReactNode;
// }

import { ComponentProps } from "react";

type TButton = ComponentProps<"button">


const Button = ({children, ...rest}:TButton) => {
    return (
        <button {...rest}>
            {children}
        </button>
    );
}

export default Button;