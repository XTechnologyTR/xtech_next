/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Image from 'components/image';

import Client from 'assets/images/client-thumb.png';

export default function ClientFeedback() {
  return (
    <section sx={{ variant: 'section.feedback' }} id="feedback">
      <Container>
        <SectionHeader
          title="Nerede olurlarsa olsunlar güvende olduklarından emin olun!"
          description="XTakip ™, telefonları takip eden en popüler uygulamalardan biridir. Çağrı kısıtlama, sosyal medya izleme, GPS bulucu , web sitesi engelleyici ve çok daha fazlasını içeren 10'dan fazla izleme özelliğine sahiptir. "
        />

        <Box sx={styles.thumbWrapper}>
          <Image
            src={Client}
            alt="Clients Thumbnail"
            width="891"
            height="297"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    px: 4,
    pb: [0, null, null, null, null, null, null, null, 6],
    img: {
      height: [100, 'auto'],
    },
  },
};
