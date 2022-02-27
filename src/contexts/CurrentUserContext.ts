import { createContext } from 'react';
import { initialUser } from '../constants/default';
import { UserDto } from '../types/UserTypes';

export const CurrentUserContext = createContext<UserDto>(initialUser);
