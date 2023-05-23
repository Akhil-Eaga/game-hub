import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListItemSkeleton from "./GenreListItemSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array(20)
    .fill(1)
    .map((element, index) => index + 1);

  if (error) return null; // no need to show so many errors
  //   if (isLoading) return <Spinner />;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem paddingY="10px">
            <GenreListItemSkeleton key={skeleton} />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
