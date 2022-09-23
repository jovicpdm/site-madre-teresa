import React, { useState } from 'react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Container,
  Heading,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import ImageUploading from 'react-images-uploading';
import uuid from 'react-uuid';

import Pallete from '../styles/pallete';

const CreateNews = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const toast = useToast();

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <ChakraProvider>
      <Box padding={'16px'}>
        <Box>
          <Center padding={['12px', '24px']}>
            <Heading>Criador de Matéria</Heading>
          </Center>
        </Box>
        <Container
          boxShadow={['none', 'md']}
          // border="solid 1px"
          borderRadius={'16px'}
          padding="16px"
        >
          <Stack mb="16px">
            <Text mb="8px" fontSize={['12px']}>
              Título da Matéria
            </Text>
            <Input
              placeholder="Digite o título"
              borderBottom="1px black0"
              onChange={event => setTitle(event.target.value)}
            ></Input>
          </Stack>
          <Stack>
            <Text mb="8px" fontSize={['12px']}>
              Corpo da Matéria
            </Text>
            <Textarea
              aria-multiline="false"
              placeholder="Digite o corpo da matéria"
              borderBottom="1px black0"
              onChange={event => setBody(event.target.value)}
            ></Textarea>
          </Stack>
          <Stack>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={70}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <SimpleGrid ali>
                  <Button
                    onClick={onImageUpload}
                    {...dragProps}
                    my={['4px', '8px']}
                  >
                    Anexar imagens
                  </Button>
                  {imageList.map((image, index) => {
                    return (
                      <Box
                        key={index}
                        alignItems="center"
                        padding={['8px', '16px']}
                      >
                        <Stack direction={'row'} my={['4px', '8px']}>
                          <Image
                            src={image.data_url}
                            boxSize="100px"
                            borderRadius={'base'}
                          />
                          <IconButton
                            position={'absolute'}
                            bg={'red.500'}
                            // color="white"
                            onClick={onImageRemove}
                            icon={<DeleteIcon />}
                            size="xs"
                          />
                        </Stack>
                      </Box>
                    );
                  })}
                  <Button
                    onClick={onImageRemoveAll}
                    bg="red.500"
                    color={'white'}
                  >
                    Remover todas
                  </Button>
                </SimpleGrid>
              )}
            </ImageUploading>
          </Stack>
          <Stack>
            <Button
              my={'16px'}
              bg={Pallete.primary}
              color="white"
            >
              Publicar
            </Button>
          </Stack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default CreateNews;
