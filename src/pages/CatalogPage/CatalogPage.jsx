import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalog } from '../../redux/thunks';
import { Container } from '../../components/Styles/Container/Container';
import { CatalogItem, CatalogList, Img, ImgWrap, TextStyle, TitleWrap } from './CatalogPage.styled';
import { Filter } from 'components/Filter/Filter';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(state => state.catalog.cars);
  console.log('catalog', catalog);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

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
    </Container>
  );
};

export default CatalogPage;
