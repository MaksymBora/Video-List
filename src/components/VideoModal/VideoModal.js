import { Component } from 'react';
import Modal from 'react-modal';
import { PreviewImg } from './VideoModal.styled';
import { Player } from 'components/Player/Player';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    maxWidth: 'calc (100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'auto',
    width: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

Modal.setAppElement('#root');

export class Videos extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { link, preview, title } = this.props.item;
    const { isModalOpen } = this.state;

    return (
      <div>
        <PreviewImg
          src={preview}
          alt={title}
          load="lazy"
          onClick={this.openModal}
        />

        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Player url={link} />
        </Modal>
      </div>
    );
  }
}
