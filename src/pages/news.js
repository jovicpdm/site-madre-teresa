import React, { useEffect, useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import HeadPage from '../components/headPage';
import NewsCard from '../components/newsCard';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('./noticias.json', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setNews(res.news));
  }, []);

  return (
    <Box>
      <HeadPage
        title="Portal de Notícias"
        description="Veja aqui as notícias das ações sociais do Instituto"
      />
      <Center>
        {news.map(item => {
          return (
            <NewsCard
              title={item.title}
              description={item.description}
              imgs={item.imgs}
            />
          );
        })}
      </Center>
    </Box>
  );
};

export default News;
