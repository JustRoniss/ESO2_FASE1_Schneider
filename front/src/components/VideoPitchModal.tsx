import { Modal } from "antd";
import Video from '../video/videoPitch.mp4'

const VideoPitchModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
}> = ({ isOpen, onClose, title }) => {
  return (
    <>
      <Modal
        title={title}
        centered
        open={isOpen}
        onCancel={onClose}
        width={1000}
        maskStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        destroyOnClose={true}
        footer={false}
      >
        <video width="100%" controls>
            <source src={Video} type="video/mp4" />
        </video>
      </Modal>
    </>
  );
};

export default VideoPitchModal;
