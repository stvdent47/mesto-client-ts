import { createUseStyles } from 'react-jss';

const mainStyles = {
  photoElements__list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(282px, 1fr))',
    gridGap: '21px 18px',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyItems: 'center',
  },
};

export const useStyles = createUseStyles(mainStyles);
