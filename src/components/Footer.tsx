import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 1.5rem;
  }
`;

interface CompProps {
  footerText: string;
  linkAddress: string;
}

export const Footer = (props: CompProps) => {
  return (
    <Container>
      <a href={props.linkAddress}>
        <p> {props.footerText}</p>
      </a>
    </Container>
  );
};
