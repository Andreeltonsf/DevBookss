import { Container } from "./Thumbnail.styles";

interface ThumbnailProps {
  thumbnail: string;
  title: string;
  size?: "small" | "large";
  bgColor: string;
}

export function Thumbnail({
  bgColor,
  thumbnail,
  title,
  size = "small",
}: ThumbnailProps) {
  return (
    <Container bgColor={bgColor} size={size}>
      {thumbnail ? (
        <img src={thumbnail} alt={title} />
      ) : (
        <img src="../../icons/img.svg" alt="" />
      )}
    </Container>
  );
}
