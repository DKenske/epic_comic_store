import styles from 'styled-components';
import { GridListTile } from '@material-ui/core';

export const Body = styles.div`
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    padding-top: 20px;
    padding-right: 10px;
    padding-left: 10px;
    
`;

export const ImageItem = styles(GridListTile)`
    cursor: pointer;
    &:hover{
      background-color: red;
      width: 432px;
      height: 648px;
    }
`;

export const ComicModalBody = styles.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
`;

export const ComicModalContainer = styles.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 10px;
`;

export const ComicModalHeader = styles.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    height: 5vh;
    background-color: #f54438;
    justify-content: flex-end;
    align-items: center;
`;

export const CloseModalButton = styles.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    cursor: pointer;

    &:hover{
      background: #f55539
    }
`;

export const LoadingContainer = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column
`;
