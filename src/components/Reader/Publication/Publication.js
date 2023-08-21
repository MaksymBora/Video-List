import { Title } from './Publication.styled';

export const Publication = ({ item }) => {
  return (
    <article>
      <Title>{item.title}</Title>
      <p>{item.text}</p>
    </article>
  );
};
