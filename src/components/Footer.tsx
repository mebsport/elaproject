import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 1.5rem;
  }
`;

const Icon = styled.img`
  max-width: 20px;
  padding: 5px;
`;

const Link = styled.div`
  display: flex;
  flex-direction: row;
`;

interface CompProps {
  footerText: string;
  linkAddress: string;
  icon: string;
}

export const Footer = (props: CompProps) => {
  return (
    <Container>
      <a href={props.linkAddress}>
        <Link>
          <Icon src={props.icon} />
          <p> {props.footerText}</p>
        </Link>
      </a>
    </Container>
  );
};
