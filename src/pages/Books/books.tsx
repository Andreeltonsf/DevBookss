import { useEffect, useState } from "react";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { googleBooksApi } from "../../services/googleBooksApi";
import { Thumbnail } from "../../components/Thumbnail/Thumbnail";
import { Container, Title, SubTitle } from "./Books.style";
interface BooksState {
  totalItems: number;
  items: Book[];
}
interface Book {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export function Books() {
  const [books, setBooks] = useState<BooksState | null>(null);

  const params = useSearchParams();
  const location = useLocation();

  const [searchParams] = params;
  const q = searchParams.get("q");

  useEffect(() => {
    googleBooksApi
      .get(`/v1/volumes?q=${q}&maxResults=20`)
      .then((response) => setBooks(response.data));
  }, [q]);

  if (!q) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <Container>
      <h1>Resultado da sua busca</h1>

      {books && (
        <ul>
          {books.items.map((book) => (
            <li key={book.id}>
              <Thumbnail
                thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                title={book.volumeInfo.title}
                bgColor="#d9d9d9"
              />
              <Title>{book.volumeInfo.title}</Title>
              <SubTitle>{book.volumeInfo.subtitle}</SubTitle>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
