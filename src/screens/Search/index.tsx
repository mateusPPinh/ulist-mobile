import { Text, FlatList } from "react-native";
import { Container } from "./styles"
import { useRoute } from "@react-navigation/native"
import { useState, useEffect } from "react";
import { Content, Thumbnail, Title } from "../Home/styles";
import { Header } from "../../components/Header";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const searchURL = process.env.EXPO_PUBLIC_SEARCH;
const apiKey = process.env.EXPO_PUBLIC_API_KEY
const imageURL = process.env.EXPO_PUBLIC_IMG;

export default function Search() {
  const navigation = useNavigation();
  const route = useRoute();
  const {q} = route.params;
  
  const [movies, setMovies] = useState<[]>([]);

  const getSearchMovies = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results, 'data results')
    setMovies(data.results);
  };

  useEffect(() => {
    getSearchMovies(`${searchURL}?api_key=${apiKey}&query=${q}`);
  }, []);

  const handleNavigateToDetails = (id: number) => {
    navigation.navigate('Details', { id });
  };

  const renderItem = ({ item }: { item: any }) => (
    <>
      <Title>{item.title}</Title>
      <TouchableOpacity onPress={() => handleNavigateToDetails(item.id)}>
        <Thumbnail
          source={{ uri: `${imageURL}${item.backdrop_path}` }} />
      </TouchableOpacity>
    </>
  )
  
  return (
    <>
      <Header />
      <Container>
      <Content>
        <Title>Resultados para: {q}</Title>
        {movies.length === 0 && <Title>Nenhum resultado encontrado :'(</Title>}
        <FlatList 
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </Content>
      </Container>
    </>
  )
}