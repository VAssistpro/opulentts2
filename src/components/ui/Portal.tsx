import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
}

const Portal: React.FC<PortalProps> = ({ children, container }) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : null;
};

export default Portal;