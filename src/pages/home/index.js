/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import {
  CircularProgress,
  GridList,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core';
import Loading from 'react-loading';
import { Pagination } from '@material-ui/lab';
import { Body, ImageItem, LoadingContainer } from './styles';
import history from '../../services/history';
import { GetComicsRequest } from '../../store/modules/getComics/actions';
import GridItem from './gridITem';
import ModalComic from './showComicModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Home = (props) => {
  const [openShowComic, setOpenShowComic] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.collection);
  const classes = useStyles();

  const handleCloseModal = () => {
    setOpenShowComic(false);
  };

  const handleChangePage = (e, newPage) => {
    console.log(newPage);
    dispatch(GetComicsRequest(newPage));
  };

  useMemo(() => {
    console.log(comics);
    dispatch(GetComicsRequest());
  }, []);

  return (
    <Body>
      <>
        {comics.comics ? (
          <GridList
            cellHeight={324}
            cols={9}
            className={classes.gridList}
            style={{ width: '100%', height: '100%' }}
          >
            <GridListTile key="Subheader" cols={9} style={{ height: '10px' }} />
            {comics.comics.map((item) => (
              <ImageItem
                onClick={() => {
                  setOpenShowComic(true);
                  setItemSelected(item);
                }}
              >
                <GridItem item={item} index={item.id % 9 === 1} />
              </ImageItem>
            ))}
          </GridList>
        ) : null}
        {comics.loading && (
          <LoadingContainer>You don't have any comics!</LoadingContainer>
        )}
        {openShowComic && (
          <ModalComic
            open={openShowComic}
            item={itemSelected}
            handleClose={handleCloseModal}
            fullWidth
          />
        )}
      </>
    </Body>
  );
};

export default Home;
