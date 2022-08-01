import { useRouter } from 'next/router';
import Modal from 'react-modal';
import styles from '../../styles/video.module.css';

import cls from 'classnames';

Modal.setAppElement('#_next');

const Video = () => {
  const router = useRouter();

  const video = {
    title: 'Hi cute dog',
    publishTime: '1990-01-01',
    description: 'A big red dog',
    channelTitle: 'Paramount Pictures',
    viewCount: 10000,
  };

  const { title, publishTime, description, channelTitle, viewCount } = video;

  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        contentLabel='Watch the video'
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}>
        <div>
          <iframe
            className={styles.videoPlayer}
            id='ytplayer'
            type='text/html'
            width='100%'
            height='360'
            src={`http://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=0`}
            frameborder='0'
          />
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}> {publishTime} </p>
              <p className={styles.title}> {title} </p>
              <p className={styles.description}> {description} </p>
            </div>
            <div className={styles.col2}>
              <p className={cls(styles.subText, styles.subTextWrapper)}>
                <span className={styles.infoTextKey}>Cast:</span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={cls(styles.subText, styles.subTextWrapper)}
                <span className={styles.textColor}>ViewCount:</span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Video;
