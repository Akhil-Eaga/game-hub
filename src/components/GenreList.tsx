import { Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <ul>
      {error && <Text>{error}</Text>}
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
