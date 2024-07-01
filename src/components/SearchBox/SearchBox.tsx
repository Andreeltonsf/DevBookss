import { InputHTMLAttributes } from "react";
import { Container } from "./SearchBox.styles";

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchBox(props: SearchBoxProps) {
  return (
    <>
      <Container>
        <input placeholder="Qual livro deseja buscar?" {...props} />
      </Container>
    </>
  );
}
