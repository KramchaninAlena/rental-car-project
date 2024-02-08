import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalog } from '../../redux/Catalog/thunks';
import { Container } from '../../components/Styles/Container/Container';
import { CatalogItem, CatalogList, Img, ImgWrap, TextStyle, TitleWrap } from './CatalogPage.styled';
import { Filter } from 'components/Filter/Filter';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const dispatch = useDispatch();
  const catalog = useSelector(state => state.catalog.cars);
  // const isLoadMore = useSelector(state => state.catalog.isLoadMore);
  console.log('loadMore', isLoadMore);

  const handleLoadMore = () => {
    setPage(page + 1);

    // scroll.scrollToBottom(268 * 2, {
    //   duration: 250,
    //   smooth: 'easeInOutQuint',
    // });
  };


  useEffect(() => {
    dispatch(fetchCatalog({ page, limit: 12 }));
  }, [dispatch, page]);

  useEffect(() => {
    if (catalog.length >= 12) {
      setIsLoadMore(true)
          }else{
            setIsLoadMore(false)
          }
  }, [catalog]);

  return (
    <Container>
      <Filter />
      <CatalogList>
        {catalog.map(({ id, img, make, model, year, rentalPrice, address, rentalCompany }) => (
          <CatalogItem key={id}>
            <ImgWrap>
              <Img src={img} alt="car" />
            </ImgWrap>
            <div>
              <TitleWrap>
                <TextStyle>
                  {make} <span style={{ color: '#3470ff' }}>{model}</span>,{' '}
                  {year}
                </TextStyle>
                <TextStyle>{rentalPrice}</TextStyle>
              </TitleWrap>
              <ul>
                <li>
                <p>{address.split(",").slice(1, 2)} | </p>
                </li>
                <li>
                <p>{address.split(",").slice(2, 3)} |</p>
                </li>
                <li>
                  <p>
                  {rentalCompany}
                  </p>
                </li>
              </ul>
            </div>
          </CatalogItem>
        ))}
      </CatalogList>
      {isLoadMore && catalog.length > 0 && (
      <button type='button' onClick={handleLoadMore}>Load more</button>)}
    </Container>
  );
};

export default CatalogPage;
