import { Link as LinkWouter} from "wouter";
import styled from "@emotion/styled";

export const Link = styled(LinkWouter)`
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme.colors.primary};
    color: ${({theme}) => theme.colors.bodyText};
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: var(--brand-color_6);
    }

    [disabled] {
        opacity: 0.3;
        pointer-events: none;
    }
`;

export const Button = Link.withComponent("button");