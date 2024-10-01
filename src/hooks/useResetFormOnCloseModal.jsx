import { useEffect, useRef } from 'react';

const DELAY = 500;

export function useResetFormOnCloseModal({ form, isOpen }) {
  const prevOpenRef = useRef();

  useEffect(() => {
    prevOpenRef.current = isOpen;
  }, [isOpen]);
  const prevOpen = prevOpenRef.current;

  useEffect(() => {
    if (!isOpen && prevOpen) {
      setTimeout(() => {
        form.resetFields();
      }, DELAY);
    }
  }, [form, prevOpen, isOpen]);
}
