import {Button} from './Button.styled';

export const Button = ({ children, ...props }) => {
    return (
        <>
            <Button {...props}>{children }</Button>
        </>
    )
}