import { Image, FlatList } from "react-native";
import { Container, ContainerTitle, Title, Content, Thumbnail, ButtonContent } from "./styles";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

interface MovieProps {
  original_title: string;
  poster_path: string;
  title: string;
  vote_average: number;
  popularity: number;
  overview: string;
  backdrop_path: string;
  id: number;
}

const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const moviesURL = process.env.EXPO_PUBLIC_API;
const imageURL = process.env.EXPO_PUBLIC_IMG;

export default function Home() {
  const navigation = useNavigation();
  const [topRatedMovies, setTopRatedMovies] = useState<MovieProps[]>([]);

  const getTopRatedMovies = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setTopRatedMovies(data.results);
  };

  useEffect(() => {
    getTopRatedMovies(`${moviesURL}top_rated?api_key=${apiKey}`);
  }, []);

  const handleNavigateToDetails = (id: number) => {
    navigation.navigate('Details', { id });
  };

  const renderItem = ({ item }: { item: MovieProps }) => (
    <>
      <ButtonContent>
        <Title>{item.title}</Title>
        <Button onPress={() => handleNavigateToDetails(item.id)}>Detalhes</Button>
      </ButtonContent>
      <Thumbnail
        source={{ uri: `${imageURL}${item.backdrop_path}` }}
      />
    </>
  );

  return (
    <>
      <Header />
      <Container>
        <Content>
          <ContainerTitle>Filmes mais aclamados</ContainerTitle>
          <FlatList
            data={topRatedMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </Content>
    </Container>
    </>
  );
}
