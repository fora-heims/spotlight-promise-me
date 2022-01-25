import { useEffect, useState } from 'react';
import {
  getNameInfo,
  getNameInfoThen,
  xkcdByComic,
  xkcdByComicThen,
} from './services/promise-me';

export default function App() {
  const [xkcdIssue, setxkcdIssue] = useState(210);

  useEffect(() => {
    getNameInfo();
    getNameInfoThen();
    xkcdByComic(xkcdIssue);
    xkcdByComicThen(xkcdIssue);
  }, []);

  return <h1>Hello World</h1>;
}
