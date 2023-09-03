import { Container, Content, Title, Wrapper, Subtitle, InfoTitle, InfoWrapper, Stars } from "./styles"
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Thumbnail } from "../Home/styles";
import { Header } from "../../components/Header";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { format } from "date-fns";

const moviesURL = process.env.EXPO_PUBLIC_API;
const apiKey = process.env.EXPO_PUBLIC_API_KEY;
const imageURL = process.env.EXPO_PUBLIC_IMG;

interface MovieProps {
  original_title: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  duration: number;
  original_language: string;
}

export default function Details() {
  const route = useRoute();
  const { id } = route.params;
  const [movie, setMovie] = useState(null);

  async function getMovie(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?api_key=${apiKey}`;
    getMovie(movieUrl);
  }, [])

  const uppercaseFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
   <>
      <Header />
      <Container>
      {movie && (
       <Content>
          <Thumbnail source={{ uri: `${imageURL}${movie.backdrop_path}` }} />
          <Wrapper>
            <Title>{movie.original_title}</Title>
            <Subtitle>{movie.overview}</Subtitle>
          </Wrapper>
          <InfoWrapper>
            <Stars>
              <MaterialIcons name="star" size={24} color="#FFC700" />
              <InfoTitle>Rating: {movie.vote_average}</InfoTitle>
            </Stars>
            <Stars>
              <MaterialIcons name="calendar-today" size={24} color="#FFC700" />
              <InfoTitle>Release date: {format(new Date(movie.release_date), 'dd/MM/yyyy')}</InfoTitle>
            </Stars>
            <Stars>
              <MaterialIcons name="language" size={24} color="#FFC700" />
              <InfoTitle>Original language: {uppercaseFirstLetter(movie.original_language)}</InfoTitle>
            </Stars>
        </InfoWrapper>
       </Content>
      )}
    </Container>
   </>
  )
}