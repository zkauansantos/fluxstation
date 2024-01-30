import { useContext } from 'react';
import { SuppliesContext } from '../contexts/SuppliesContext';

export default function useSuppliesContext() {
  return useContext(SuppliesContext);
}
