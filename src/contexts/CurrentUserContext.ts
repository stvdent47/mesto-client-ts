import { createContext } from 'react';
import { ICurrentUser, emptyUser } from '../interfaces/ICurrentUser';

export const CurrentUserContext = createContext<ICurrentUser>(emptyUser);
