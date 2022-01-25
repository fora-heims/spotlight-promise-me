import { useEffect } from 'react';
import { getNameInfo, getNameInfoThen } from './services/promise-me';

export default function App() {
  useEffect(() => {
    getNameInfo();
    getNameInfoThen();
  }, []);

  return <h1>Hello World</h1>;
}
