import styled from "styled-components";
import { TextCardProps } from "./TextCard.types";

export function TextCard({ items, title, footer }: TextCardProps) {
  return (
    <StyledDiv>
      {title && <h2>{title}</h2>}
      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      {footer && <h3>{footer}</h3>}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 16px;
  border-radius: 16px;
  box-shadow: 2px 2px 5px #ccc;
`;
