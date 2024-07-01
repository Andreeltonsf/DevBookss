import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, SearchContainer, SearchButton } from "./Search.styled";
import { SearchBox } from "../../components/SearchBox";

export function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search) {
      navigate(`/books?q=${search}`);
    }
  };
  return (
    <Container>
      <h1>Busque seus livros favoritos!</h1>
      <SearchContainer>
        <SearchBox value={search} onChange={(e) => setSearch(e.target.value)} />
        <SearchButton onClick={handleSearch}>Buscar</SearchButton>
      </SearchContainer>
    </Container>
  );
}
