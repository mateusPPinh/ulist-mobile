import { Container, Logo, Content, Input, InputContainer } from "./styles"
import logo from '../../../assets/ulist-logo.png'
import { Button } from "../Button"
import { useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Alert, TouchableOpacity } from "react-native"

export function Header() {
  const navigation = useNavigation();
  const route = useRoute();

  const [search, setSearch] = useState('');
  console.log(search)

  const handleSearch = () => {
    if (!search) {
      Alert.alert('Digite um termo para pesquisar');
      return;
    }
    navigation.navigate('Search', { q: search });
  }
  
  return (
    <Container>
      <Content>
       <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo source={logo} />
       </TouchableOpacity>
        {route.name === 'Search' || route.name === 'Details' ? (
          <Button onPress={() => navigation.navigate('Home')}>Voltar</Button>
        ) : (
          <InputContainer>
            <Input placeholder="ex: the batman" onChangeText={setSearch} value={search} />
            <Button onPress={handleSearch}>Pesquisar</Button>
          </InputContainer>
        )}
      </Content>
    </Container>
  );
}