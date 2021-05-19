---
    to: "<%= `${src}/components/${name}/index.tsx` %>"
---

import { Modal } from 'shared/Modal';
import { ModalProps } from 'hoc/withModals';

export const <%= name %>: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} footer={null}>
      <%= name %>
    </Modal>
  );
};
