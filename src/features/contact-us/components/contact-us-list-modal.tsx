import { Modal } from '@components/lib/modal/modal';

const ContactUsListModal = ({
  title,
  description = null,
  onClose = null,
  dialog,
  children,
}) => {
  return (
    <Modal state={dialog} onClose={onClose} className="md:w-[680px]">
      <Modal.Header title={title} subtitle={description} />
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export { ContactUsListModal };
