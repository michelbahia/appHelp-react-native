import { useNavigation } from '@react-navigation/native';
import { useTheme, HStack, IconButton, Heading, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
  title: string;
};

export function Header({ title, ...rest }: Props) {
  const { colors } = useTheme();

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  };

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
    >
      <IconButton 
        icon={<CaretLeft 
        color={colors.gray[200]} 
        size={24} />}
        onPress={handleGoBack} 
      />

      <Heading 
        flex={1} 
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        ml={-6}
      >
        {title}
      </Heading>
    </HStack>
  );
}